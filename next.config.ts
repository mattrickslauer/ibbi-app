import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ibbichile.com",
      },
    ],
  },
};

export default nextConfig;
