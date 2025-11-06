/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Remove basePath and assetPrefix for custom domain
  // basePath: '/website',
  // assetPrefix: '/website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
