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
      }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin({
      crawl: true
    })
  ]

};
