const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const buildFile = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ergo.js',
    library: 'ergo',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Regular expression
        exclude: /(node_modules|bower_components)/, // excluded node_modules
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin(
      {
        test: /\.js(\?.*)?$/i,
      }
    )],
  },
};

const npmFile = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.js',
    library: 'ergo',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Regular expression
        exclude: /(node_modules|bower_components)/, // excluded node_modules
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin(
      {
        test: /\.js(\?.*)?$/i,
      }
    )],
  },
};

// Return Array of Configurations
module.exports = [
  buildFile, npmFile,
];
