/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    loader: "default",
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
    disableStaticImages: true,
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
