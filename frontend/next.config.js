/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icmedianew.gumlet.io',
      },
      {
        protocol: 'https',
        hostname: 'indiacircus.com',
      },
    ],
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  // Empty turbopack config to silence the warning
  turbopack: {},
  // Suppress Watchpack warnings for Windows system files
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          '**/node_modules',
          '**/.next',
          '**/C:/DumpStack.log.tmp',
          '**/C:/hiberfil.sys',
          '**/C:/pagefile.sys',
          '**/C:/swapfile.sys',
          '**/C:/System Volume Information',
        ],
      }
    }
    return config
  },
}

module.exports = nextConfig
