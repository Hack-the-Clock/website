/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/website',        // Comment out for local testing
  assetPrefix: '/website',     // Comment out for local testing
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
