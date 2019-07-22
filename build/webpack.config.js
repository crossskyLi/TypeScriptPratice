const webpack = require("webpack");
const { resolve } = require("./utils");

module.exports = webpackEnv => {
  const { mode } = webpackEnv;
  return {
    mode,
    context: resolve(),
    entry: resolve("src/main.ts"),
    resolve: {
      extensions: [".js", ".ts"],
      alias: {
        "@": resolve("src")
      }
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader"
        }
      ]
    },
    plugins: [new webpack.ProgressPlugin()]
  };
};
