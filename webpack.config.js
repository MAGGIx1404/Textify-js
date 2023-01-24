const path = require("path");
const copyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "Textify.min.js",
    clean: true,
    library: {
      name: "Textify.js",
      type: "umd",
      export: "default"
    },
    globalObject: "this",
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new copyWebpackPlugin({
      patterns: [{ from: "./style/Textify.css", to: "Textify.min.css" }]
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        extractComments: "all",
        minify: TerserPlugin.uglifyJsMinify
      })
    ]
  }
};
