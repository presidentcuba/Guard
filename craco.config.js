const path = require("path");
const CracoLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./public/assets"),
    },
    configure: {
      output: {
        path: path.resolve(__dirname, "./build"),
        publicPath: "/",
      },
    },
  },
  style: {
    css: {
      loaderOptions: () => {
        return { url: false };
      },
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "primary-color": "#4834D6",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
