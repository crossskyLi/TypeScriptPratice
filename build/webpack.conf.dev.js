const webpackMerge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.config");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require("./utils");

const mode = "development";
module.exports = webpackMerge(
  {
    mode,
    devServer: {
      host: "localhost",
      hot: true,
      inline: true,
      compress: true,
      open: true,
      quiet: true
    },
    plugins:[
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: resolve('./index.html'),
        inject: true
      }),
    ]
  },
  webpackBaseConfig({ mode })
);
