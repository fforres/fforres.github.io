module.exports = {
  webpackDevMiddleware(config) {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    return config;
  },
  trailingSlash: true,
  swcMinify: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/projects": { page: "/projects" },
      "/talks": { page: "/talks" }
    };
  },
  target: "serverless"
};
