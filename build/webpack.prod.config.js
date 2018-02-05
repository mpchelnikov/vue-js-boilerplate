const webpack = require('webpack')
const merge = require('webpack-merge')
const exec = require('child_process').execSync
const baseWebpackConfig = require('./webpack.base.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

exec('rm -rf dist/')

const webpackConfig = merge(baseWebpackConfig, {
// http://vue-loader.vuejs.org/en/workflow/production.html
  plugins: [
    new ExtractTextPlugin('styles-[hash].css'),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    // extract vendor chunks
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => {
        return module.resource && /\.(js|css|es6)$/.test(module.resource) && module.resource.indexOf('node_modules') !== -1
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],
});

module.exports = webpackConfig
