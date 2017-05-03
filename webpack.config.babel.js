const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

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
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'import-react-loader',
          'react-styleable-classname-loader',
          'rename-jsx-attributes-loader'
        ]
      },
      // {
      //   test: /\.html$/,
      //   use: ['raw-loader']
      // },
      // {
      //   test: /\.css$/,
      //   use: ['raw-loader']
      // }
      // TODO: pickup - after I made css modules import correctly
      // I'm getting further in the component rendering,
      // and I'm back to it thinking I'm not returning a react element
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new StaticSiteGeneratorPlugin({
      crawl: true
    })
  ],

  resolveLoader: {
    alias: {
      // 'html-to-react-loader': path.join(__dirname, 'utils', 'html-to-react-loader.js'),
      'import-react-loader': path.join(__dirname, 'utils', 'import-react-loader.js'),
      'react-styleable-classname-loader': path.join(__dirname, 'utils', 'react-styleable-classname-loader.js'),
      'rename-jsx-attributes-loader': path.join(__dirname, 'utils', 'rename-jsx-attributes-loader.js')
    }
  }
}
