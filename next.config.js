const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  webpackDevMiddleware(config) {
    config.watchOptions = {
      ignored: [
        /\.git\//,
        /\.next\//,
        /node_modules/
      ]
    }
    return config;
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    )

    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
  target: 'serverless'
})