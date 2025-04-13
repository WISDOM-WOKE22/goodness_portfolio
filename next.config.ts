import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['blog.openreplay.com'], // <-- Add allowed image domains here
  },
};

export default nextConfig;
