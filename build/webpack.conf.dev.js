const webpackMerge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.config");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const portfinder = require("portfinder");
const ipLib = require('ip');
const { resolve } = require("./utils");
const mode = "development";
const port = 8080;
const ip = ipLib.address();

const portfinderResult = () => {
  return new Promise((resolve, reject) => {
    portfinder.basePort = port;
    portfinder.getPort((err, port) => {
      resolve(port)
    })
  })
};


async function getConfig() {
  const port = await portfinderResult();
  return webpackMerge(
    {
      mode,
      devServer: {
        host: ip,
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
              `run at : http://${ip}:${port}`
            ]
          }
        })
      ]
    },
    webpackBaseConfig({ mode })
  )
};

module.exports = getConfig()
