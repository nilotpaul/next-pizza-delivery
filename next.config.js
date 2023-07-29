/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    loader: "custom",
    loaderFile: "./loader.ts",
  },
};

module.exports = nextConfig;
