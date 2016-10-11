const { join } = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

const app = join(__dirname, 'app')
const dist = join(__dirname, 'dist')

const isProduction = process.env.NODE_ENV === 'production'

const optimizationPlugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
]

const plugins = (isProduction ? optimizationPlugins : []).concat([
  new CleanWebpackPlugin([dist]),
  new HtmlWebpackPlugin({
    template: join(app, 'index.html')
  })
])

module.exports = {
  devtool: !isProduction && 'eval-source-map',
  entry: {
    index: [join(app, 'index.js')]
  },
  output: {
    path: dist,
    filename: '[name]-[hash].js',
    libraryTarget: 'var',
    library: 'Layout'
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: app
      }
    ],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      test: /\.less$/,
      loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss!less'
    }]
  },
  postcss: [autoprefixer],
  plugins
}
