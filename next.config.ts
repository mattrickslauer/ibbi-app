import type { NextConfig } from "next";

// Static export: the site is plain files on S3 behind CloudFront, nothing runs at request
// time. trailingSlash writes each route as <route>/index.html, which CloudFront's
// viewer-request function maps clean URLs onto (see infra/stack.yaml).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
