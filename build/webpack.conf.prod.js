const webpackMerge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.config");
const mode = "production";
// webpackBaseConfig(Object.assign({}, { mode }))
module.exports = webpackMerge(
  {
    mode,
    optimization: {
      minimize: false,
    },
  },
  webpackBaseConfig({ mode })
);
