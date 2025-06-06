/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output build files to 'dist' instead of default '.next'
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