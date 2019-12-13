// eslint-disable-next-line
module.exports = {
  webpackDevMiddleware(config) {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    if (options.dev) {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: "eslint-loader",
        exclude: [/node_modules/, /.next/, /out/],
        enforce: "pre",
        options: {
          emitWarning: true
        }
      });
    }

    return config;
  },
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/projects": { page: "/projects" },
      "/talks": { page: "/talks" }
    };
  },
  target: "serverless"
};
