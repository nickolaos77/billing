var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './bundle.js',
  },
  resolve: {
    root: __dirname,
    modulesDirectories:[
        'node_modules',
        './src/components'
    ],  
    alias: {
        actions:'src/actions/actions.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015','stage-0']
        },
    ]
  }
};

