/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    DB_URI: "mongodb://localhost:27017/next13-auth",
    NEXTAUTH_SECRET: "codingwithamit",
  },
};

module.exports = nextConfig;
