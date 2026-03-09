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
  },
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
