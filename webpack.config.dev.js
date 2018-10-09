/* eslint-disable no-undef */
const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  webpack = require("webpack");


module.exports = {
  entry: {
    app: "./src/index.js"
  },

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
      filename: "index.html"
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          "file-loader"
        ]
      },
    ]
  },

  devServer: {
    contentBase: "./dist",
    port: 3000,
    open: true,
    hot: true
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  mode: "development",
  // hot: true,
  devtool: "inline-source-map",
};