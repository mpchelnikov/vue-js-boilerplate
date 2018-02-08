const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

let devServerHost = 'localhost'
let devServerPort = 8080

if (process.env.DOCKERHOST) {
  devServerHost = process.env.DOCKERHOST
  devServerPort = 8081
}

const webpackConfig = merge(baseWebpackConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    host: devServerHost,
    port: devServerPort,
    noInfo: true,
    clientLogLevel: 'warning',
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    open: false,
    overlay: true,
    publicPath: '/',
    historyApiFallback: true, // set true if your router is in history mode
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
  },

  performance: {
    hints: false
  },

  devtool: '#eval-source-map'
});

module.exports = webpackConfig
