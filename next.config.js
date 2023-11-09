/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
      },
      reactStrictMode: true,
      // async rewrites() {
      //   return [
      //     {
      //       source: '/api/:path*',
      //       destination: `/api`,
      //     },
      //   ];
      // },
}

module.exports = nextConfig
