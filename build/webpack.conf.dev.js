const webpackMerge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.config");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const portfinder = require("portfinder");

const { resolve } = require("./utils");

const portfinderResult = () => {
  return new Promise((resolve, reject) => {
    portfinder.basePort = 8080;
    portfinder.getPort((err, port) => {
      resolve(port)
    })
  })
};
async function doPromise() {
  return await portfinderResult();
}
const port = doPromise();

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
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: resolve('./index.html'),
        inject: true
      }),
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [
            port
          ]
        }
      })
    ]
  },
  webpackBaseConfig({ mode })
);
