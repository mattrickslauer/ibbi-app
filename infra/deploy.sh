#!/usr/bin/env bash
# Deploy ibbichile.com infrastructure (CloudFormation), then build and publish the site.
# Idempotent — safe to re-run. Needs admin AWS credentials; CI cannot change the stack.
#
#   ./infra/deploy.sh                                  # stack + files
#   CERT_ARN=arn:aws:acm:... ./infra/deploy.sh         # attach ibbichile.com + www
set -euo pipefail

STACK="${STACK:-ibbi-app}"
DOMAIN="${DOMAIN:-ibbichile.com}"
export AWS_DEFAULT_REGION="${AWS_REGION:-us-east-1}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

PARAMS=( "DomainName=${DOMAIN}" )
[ -n "${CERT_ARN:-}" ] && PARAMS+=( "CertificateArn=${CERT_ARN}" )

echo "Deploying stack $STACK"
aws cloudformation deploy \
  --template-file "$ROOT/infra/stack.yaml" \
  --stack-name "$STACK" \
  --capabilities CAPABILITY_NAMED_IAM \
  --no-fail-on-empty-changeset \
  --parameter-overrides "${PARAMS[@]}"

(cd "$ROOT" && npm ci && npx next build)
STACK="$STACK" "$ROOT/infra/publish.sh"
