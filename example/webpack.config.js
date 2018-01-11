var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'react-redux-multilingual': path.join(__dirname, './../lib')
    },
    fallback: path.resolve(__dirname, './node_modules')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, './'),
      exclude: /(node_modules|bower_components)/
    }]
  }
}

