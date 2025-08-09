/** @type {import('next').NextConfig} */
const repo = "famscomtech"; // e.g., laundry-mvp
module.exports = {
  output: "export", // enable static export
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: { unoptimized: true }, // GitHub Pages doesn't run Image Optimization
};