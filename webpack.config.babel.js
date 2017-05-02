const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {

  entry: './site/index.js',

  output: {
    filename: 'index.js',
    path: path.resolve('dist'),
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'react-markdown-loader']
      },
      {
        test: /\.component\.html$/,
        exclude: /node_modules/,
        use: ['import-react-loader', 'babel-loader']
      },
      {
        test: /\.component\.css$/,
        exclude: /node_modules/,
        use: [{
          loader: 'css-loader',
          options: {
            modules: true
          }
        }]
      }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin({
      crawl: true
    })
  ],

  resolveLoader: {
    alias: {
      'html-to-react-loader': path.join(__dirname, 'utils', 'html-to-react-loader.js'),
      'import-react-loader': path.join(__dirname, 'utils', 'import-react-loader.js')
    }
  }
}
