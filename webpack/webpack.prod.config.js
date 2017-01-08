const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const routes = ['home', 'talks'];

function entries(arr) {
  const ob = {};
  ob.entry = path.resolve(__dirname, '..', 'src/entry.js');
  arr.forEach((el) => {
    ob[el] = path.resolve(__dirname, '..', 'src/routes', el, 'index.js');
  });
  return ob;
}

function htmlPlugins(arr) {
  const newArray = arr.map(function(el) {
    return new HtmlWebpackPlugin({
      title: 'fforr.es <3 web things',
      filename: el + '.html',
      chunks: ['entry', el],
      template: path.resolve(__dirname, '../src/routes', 'talks', 'index.ejs'),
    });
  });
  newArray.push(new HtmlWebpackPlugin({
    title: 'fforr.es <3 web things',
    filename: 'index.html',
    chunks: ['entry', 'home'],
    template: path.resolve(__dirname, '../src/routes', 'home', 'index.ejs'),
  }));
  return newArray;
}

module.exports = {
  entry: entries(routes),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
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
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
        plugins: ['transform-runtime', 'inferno'],
      },
    }],
  },
  plugins: [
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
  ].concat(htmlPlugins(routes)),
};
