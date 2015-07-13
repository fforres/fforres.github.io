'use strict';
var webpack = require('webpack'),
   path = require('path');
// PATHS
var PATHS = {
   app: __dirname + '',
};
module.exports = {
   // config goes here
   context: PATHS.app,
   entry: {
      app: './index.js'
   },
   devtool: 'eval',
   output: {
      path: PATHS.app,
      filename: 'build/bundle.js',
      pathinfo: true
   },
   resolve: {
      modulesDirectories: ['node_modules']
   },
   module: {
      loaders: [{
         test: /\.css$/,
         loader: 'style-loader!css-loader'
      }, {
         test: /\.scss$/,
         loader: 'style!css!sass'
      }, {
         test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
         loader: 'url-loader?limit=10000&minetype=application/font-woff'
      }, {
         test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
         loader: 'file-loader'
      }]
   },
   plugins: [
      new webpack.optimize.UglifyJsPlugin({
         mangle: {
            except: ['$super', '$', 'exports', 'require']
         }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
         minimize: true
      })
   ]
};
