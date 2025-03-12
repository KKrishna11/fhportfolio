import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "cdn.shopify.com"],

  },
  eslint: {
    ignoreDuringBuilds: true,
  },


};

export default nextConfig;
