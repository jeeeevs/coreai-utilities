/** @type {import('next').NextConfig} */
const nextConfig = {
  // Custom build output directory
  distDir: 'dist',
  // Allow external image domains
  images: {
    domains: ['picsum.photos'],
  },
};

module.exports = nextConfig;