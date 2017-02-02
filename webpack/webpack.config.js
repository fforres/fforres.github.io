/*
  eslint-disable
    import/no-extraneous-dependencies,
    no-var,
    func-names,
    prefer-arrow-callback,
    prefer-template
*/
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var sourcePath = path.resolve(__dirname, '../src/routes');
var routes = fs.readdirSync(sourcePath).filter(function (file) {
  return fs.statSync(path.join(sourcePath, file)).isDirectory();
});

function entries(arr) {
  const ob = {};
  arr.forEach((el) => {
    ob[el] = path.resolve(sourcePath, el, 'index.js');
  });
  return ob;
}

function htmlPlugins(arr) {
  const newArray = arr.map(function (el) {
    return new HtmlWebpackPlugin({
      title: 'fforr.es <3 web things',
      filename: el + '.html',
      chunks: [el],
      template: path.resolve(sourcePath, el, 'index.ejs'),
    });
  });
  newArray.push(new HtmlWebpackPlugin({
    title: 'fforr.es <3 web things',
    filename: 'index.html',
    chunks: ['home'],
    template: path.resolve(sourcePath, 'home', 'index.ejs'),
  }));
  return newArray;
}

module.exports = {
  entry: entries(routes),
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
  },
  module: {
    loaders: [{
      test: /\.css$/,
      exclude: /node_modules/,
      loaders: [
        'style-loader?sourceMap',
        'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
      ],
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader',
      }),
    }, {
      test: /\.css$/,
      exclude: /src/,
      include: /src\/styles/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader',
      }),
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
        plugins: [
          'transform-runtime',
          'inferno',
        ],
      },
    }],
  },
  resolve: {
    alias: {
      react: 'inferno-compat',
      'react-dom': 'inferno-compat',
    },
  },
  plugins: [
    new ExtractTextPlugin('extracted.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      'window.$': 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
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
