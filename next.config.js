/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.nawpic.com', 'www.gannett-cdn.com', 'lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
