/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "assets.aceternity.com", "ui.aceternity.com", "pbs.twimg.com"],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.glsl/,
      type: 'asset/source',
    });
    return config;
  },
};

export default nextConfig;
