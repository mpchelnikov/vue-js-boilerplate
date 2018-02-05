const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    client: './src/main.js',
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name]-[hash].js',
    chunkFilename: 'js/[name]-[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader?sourceMap',
          'css-loader?sourceMap'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader?sourceMap',
          'css-loader?sourceMap',
          'sass-loader?sourceMap'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader?sourceMap',
          'css-loader?sourceMap',
          'sass-loader?indentedSyntax&sourceMap'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader?sourceMap',
              'css-loader?sourceMap',
              'sass-loader?sourceMap'
            ],
            'sass': [
              'vue-style-loader?sourceMap',
              'css-loader?sourceMap',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'projectName',
      template: path.resolve(__dirname, 'index.html'),
      filename: '../dist/index.html'
    }),
  ],

  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    modules: [
      // Get rid of dot hell
      path.join(process.cwd(), 'node_modules' || ''),
      path.join(process.cwd(), 'src' || ''),
    ]
  },
}
