var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: {
    /*app: './src/main.js'*/
    app: './src/business/_index.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ],
  resolve: {
    //后缀名的自动补全
    extensions: ['', '.js', '.vue', '.css', '.scss', '.json', '.html'],
    fallback: [path.join(__dirname, '../node_modules')],
    //别名，配置后可以通过别名导入模块
    alias: {
      'src': path.resolve(__dirname, './../src'),
      'assets': path.resolve(__dirname, './../src/assets'),
      'business': path.resolve(__dirname, './../src/business'),
      'vui': path.resolve(__dirname, './../src/vui'),
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.css$/,
        loader:  'style!css'
      },
    ]
  },
  vue: {
    loaders: utils.cssLoaders()
  }
}
