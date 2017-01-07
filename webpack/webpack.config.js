var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    entry: path.resolve(__dirname, '..', 'src/entry.js'),
    home: path.resolve(__dirname, '../src/entry/routes', 'home', 'index.js'),
    talks: path.resolve(__dirname, '../src/entry/routes', 'talks', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, '..', '/dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader',
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff',
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
        plugins: ['transform-runtime'],
      },
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'fforr.es <3 web things',
      filename: 'home.html',
      template: path.resolve(__dirname, '../src/routes/', 'home', 'index.ejs'),
    }),
    new HtmlWebpackPlugin({
      title: 'fforr.es <3 web things',
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/routes/', 'home', 'index.ejs'),
    }),
    new HtmlWebpackPlugin({
      title: 'fforr.es <3 web things',
      filename: 'talks.html',
      template: path.resolve(__dirname, '../src/routes/', 'talks', 'index.ejs'),
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      'window.$': 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.Tether': 'tether',
      Polymer: 'Polymer',
      'window-Polymer': 'Polymer',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
  ],
};
