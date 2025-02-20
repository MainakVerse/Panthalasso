import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com'
      },
      {
        hostname: 'plus.unsplash.com'
      },
      {
        hostname: 'pbs.twimg.com'
      },
      {
        hostname: 'assets.aceternity.com'
      },
      {
        hostname: 'ideogram.ai'
      },
      {
        hostname: "cdn.dribbble.com"
      },
      {
        hostname: "miro.medium.com"
      }
    ],
  },
};

export default nextConfig;
