/**
 * @type {import('next').NextCosnfig}
 */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
  trailingSlash: true,
  swcMinify: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/projects": { page: "/projects" },
      "/talks": { page: "/talks" },
    };
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
