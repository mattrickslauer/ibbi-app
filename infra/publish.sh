#!/usr/bin/env bash
# Publish the built site (out/, from `next build`) to S3 and bust the CloudFront cache.
# Used by CI on every push to main and by infra/deploy.sh. Needs AWS credentials that can
# read the stack outputs.
set -euo pipefail

STACK="${STACK:-ibbi-app}"
export AWS_DEFAULT_REGION="${AWS_REGION:-us-east-1}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="$ROOT/out"
[ -f "$OUT/index.html" ] || { echo "No build in $OUT — run npx next build first"; exit 1; }

out() { aws cloudformation describe-stacks --stack-name "$STACK" \
  --query "Stacks[0].Outputs[?OutputKey=='$1'].OutputValue" --output text; }
BUCKET="$(out SiteBucketName)"
DIST_ID="$(out DistributionId)"
DIST_DOMAIN="$(out DistributionDomain)"
B="s3://$BUCKET"

# Hashed build assets never change under the same name, so browsers keep them a year.
# Everything else (pages, RSC payloads, images in public/) revalidates or caches briefly.
echo "Syncing to $BUCKET"
aws s3 sync "$OUT/_next/static" "$B/_next/static" --only-show-errors \
  --cache-control "public, max-age=31536000, immutable"
aws s3 sync "$OUT" "$B" --delete --only-show-errors --exclude "_next/static/*" \
  --cache-control "public, max-age=300"
aws s3 cp "$B" "$B" --recursive --only-show-errors \
  --exclude "*" --include "*.html" --metadata-directive REPLACE \
  --content-type "text/html; charset=utf-8" \
  --cache-control "public, max-age=0, must-revalidate"

echo "Invalidating CloudFront"
INV="$(aws cloudfront create-invalidation --distribution-id "$DIST_ID" --paths '/*' \
  --query 'Invalidation.Id' --output text)"
aws cloudfront wait invalidation-completed --distribution-id "$DIST_ID" --id "$INV"

# A green deploy that serves a broken page is worse than a red one.
D="https://${DIST_DOMAIN}"
for path in / /quienes-somos /ministerios/ /contacto /logo.png; do
  code=$(curl -sS -o /dev/null -w '%{http_code}' --max-time 30 "$D$path")
  [ "$code" = "200" ] || { echo "$path returned $code"; exit 1; }
done
code=$(curl -sS -o /dev/null -w '%{http_code}' --max-time 30 "$D/no-such-page")
[ "$code" = "404" ] || { echo "/no-such-page returned $code, wanted 404"; exit 1; }
echo "Published: $D"
