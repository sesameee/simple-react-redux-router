/* eslint-disable */
// const path = require('path');

// module.exports = {
//   entry: './app/app.js',
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [{
//       test: /\.js$/,
//       loader: 'babel',
//       exclude: /node_modules/,
//       include: __dirname
//     }]
//   }
// }



// This will make the redux-simpler-router module resolve to the
// latest src instead of using it from npm. Remove this if running
// outside of the source.
// var src = path.join(__dirname, '..', '..', 'src')
// var fs = require('fs')
// if (fs.existsSync(src)) {
//   // Use the latest src
//   module.exports.resolve = { alias: { 'react-router-redux': src } }
//   module.exports.module.loaders.push({
//     test: /\.js$/,
//     loaders: ['babel'],
//     include: src
//   });
// }
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'app');
var env = process.env.NODE_ENV;
var configFile = env === 'dev' ? require('./config-dev.json') : env === 'production' ? require('./config-production.json') :require('./config-dev.json');
//var langFile = require('./lang/zh-tw.json');

var config = {
  devtool: 'eval',
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      APP_DIR + '/app.js' ]
  },
  output: {
    path: BUILD_DIR,
    publicPath: "/assets/",
    filename: '[name].js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ]
      }
    ]
  },
  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.js','.jsx']
  },
  externals: {
    'Config': JSON.stringify(configFile),

  },
  plugins : [
    new ExtractTextPlugin('[name].css'),
    // hot reload
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
};

module.exports = config;


