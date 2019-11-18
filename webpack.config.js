const path = require('path');

const buildFile = {
  entry: './src/client.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ergo.js',
    library: 'ergo',
  },
};

const npmFile = {
  entry: './src/client.ts',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.js',
    library: 'ergo',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

// Return Array of Configurations
module.exports = [
  buildFile, npmFile,
];
