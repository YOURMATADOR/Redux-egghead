const path = require("path");

module.exports = function(env, argv) {
  return {
    mode: env.prod ? "production" : "development",
    entry: "./public/src/app.js",
    output: {
      path: path.resolve(__dirname, "public", "dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        { test: /\.css$/, use: "css-loader/locals" }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, "public"),
      compress: true,
      publicPath: "/dist",
      historyApiFallback: true,
      watchContentBase: true
    }
  };
};
