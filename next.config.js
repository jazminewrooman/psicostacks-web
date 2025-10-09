/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
  },
  // Ensure static files in the public folder are served
  // and properly cached
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|jpeg|webp|avif|gif)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
