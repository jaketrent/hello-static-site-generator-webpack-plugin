const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {

  entry: './index.js',

  output: {
    filename: 'index.js',
    path: path.resolve('dist'),
    libraryTarget: 'umd'
  },

  plugins: [
    new StaticSiteGeneratorPlugin()
  ]

};
