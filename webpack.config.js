/* global __dirname, require, module */
const path = require('path');
const fs = require('file-system');

const config = {
  target: 'node',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'migration-data-model',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.js'],
  },
  externals: fs.readdirSync('node_modules').filter(x => x !== '.bin'),
};

module.exports = config;