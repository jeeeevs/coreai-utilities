/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output build files to 'dist' instead of default '.next'
  distDir: 'dist',
  // Allow external image domains
  images: {
    domains: ['picsum.photos'],
  },
};

module.exports = nextConfig;