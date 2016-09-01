const webpack = require('webpack'); // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line

module.exports = {
  entry: './client/app/app.js',
  output: {
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
};
