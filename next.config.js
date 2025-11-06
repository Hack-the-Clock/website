/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hackathon-site',        // Comment out for local testing
  assetPrefix: '/hackathon-site',     // Comment out for local testing
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
