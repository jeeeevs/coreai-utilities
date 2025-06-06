/** @type {import('next').NextConfig} */
const nextConfig = {
  // Custom build output directory
  distDir: 'dist',
  // Allow external images via remote patterns
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;