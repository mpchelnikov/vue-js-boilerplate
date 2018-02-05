const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const webpackConfig = merge(baseWebpackConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
  ],

  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },

  performance: {
    hints: false
  },

  devtool: '#eval-source-map'
});

module.exports = webpackConfig
