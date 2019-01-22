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
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
})