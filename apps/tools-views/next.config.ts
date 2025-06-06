import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output build files to 'dist' instead of default '.next'
  distDir: 'dist',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/s2/favicons/**',
      },
    ],
  },
};

export default nextConfig;
