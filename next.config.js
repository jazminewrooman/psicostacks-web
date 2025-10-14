/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
  },
  // Webpack configuration to ignore optional pino dependencies
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }
    
    // Ignore pino-pretty (optional dependency)
    config.externals = config.externals || [];
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    
    return config;
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
