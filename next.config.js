const path = require('path')
const withSourceMaps = require('@zeit/next-source-maps')()
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

module.exports = withSourceMaps({
  webpack: (config, { isServer }) => {
    config.resolve.alias['~'] = path.resolve('./src')

    return config
  },
})
