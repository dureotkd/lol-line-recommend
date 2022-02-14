var path = require("path");

module.exports = {
  entry: "./client/static/js/index.js",
  devServer: {
    host: "127.0.0.1",
    compress: true,
    hot: true,
    // contentBase: path.join(__dirname, "client", "index.html"),
    // inline: true,
    port: 3000,
    open: true,
  },
};
