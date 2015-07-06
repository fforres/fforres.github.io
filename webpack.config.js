'use strict';
var webpack = require('webpack'),
path = require('path');
// PATHS
var PATHS = {
  app: __dirname + '/app',
  bower: __dirname + '/app/bower_components'
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
      modulesDirectories: ['app/bower_components', 'node_modules']
    },
    module: {
      loaders: [
        {
           test: /\.css$/,
           loader: "style-loader!css-loader"
        }, {
           test: /\.scss$/,
           loader: "style!css!sass"
        }      
       ]
   }
};
