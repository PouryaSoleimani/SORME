/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    if (cfg.cache && !dev) {
      cfg.cache = Object.freeze({
        type: 'memory',
      })
      cfg.cache.maxMemoryGenerations = 0
    }
    // Important: return the modified config
    return config
  },
}

export default nextConfig