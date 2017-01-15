/*
  eslint-disable
    import/no-extraneous-dependencies,
    no-var,
    func-names,
    prefer-arrow-callback,
    prefer-template
*/
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var routes = ['home', 'talks'];

function entries(arr) {
  const ob = {};
  ob.entry = path.resolve(__dirname, '..', 'src/entry.js');
  arr.forEach((el) => {
    ob[el] = path.resolve(__dirname, '..', 'src/routes', el, 'index.js');
  });
  return ob;
}

function htmlPlugins(arr) {
  const newArray = arr.map(function (el) {
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
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: [
        'style-loader?sourceMap',
        'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
      ],
    }, {
      test: /\.scss$/,
      loaders: [
        'style-loader',
        'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        'resolve-url-loader',
        'sass-loader',
      ],
    }, {
      test: /.*\.(gif|png|jpe?g|svg)$/i,
      loaders: [
        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}',
      ],
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
