const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm

const webpack = require("webpack"); //to access built-in plugins

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  mode: "development",

  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
