/** @type {import('next').NextConfig} */
const repo = "famscomtech"; // e.g., laundry-mvp

const nextConfig: any = {
  images: { unoptimized: true }, // GitHub Pages doesn't run Image Optimization
};

// Only apply basePath and output export for production builds
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = "export";
  nextConfig.basePath = `/${repo}`;
  nextConfig.assetPrefix = `/${repo}/`;
}

module.exports = nextConfig;