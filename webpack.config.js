const path = require("path");
const miniCss = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { "./build/scripts/bundle": "./app/scripts/index.js" },
  watch: true,
  output: {
    path: path.join(__dirname, "./"),
    publicPath: "./",
    filename: "[name].js",
    //chunkFilename: '[name].js'
  },
  resolve: {
    extensions: ["*", ".json", ".js", ".jsx"],
  },
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /^app\/\S*\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
    ],
  },
  plugins: [
    new miniCss({
      filename: "./build/styles/style.css",
    }),
    new HtmlWebpackPlugin({
      template: "./tools/index.pug",
    }),
  ],

  // -----------------------
  // TODO
  // -----------------------
  // devServer: {
  //   contentBase: path.join(__dirname, 'scripts/dist/'),
  //   inline: true,
  //   host: 'localhost',
  //   port: 8080,
  // }
};
