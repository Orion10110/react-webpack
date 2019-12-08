'use strict'

const utils = require('./utils')
const merge = require('webpack-merge')
const modules = require('./modules')

module.exports = merge({
  output: {
    path: utils.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.sass', '.scss'],
    modules: [utils.resolve('src'), 'node_modules']
  }
},
modules)
