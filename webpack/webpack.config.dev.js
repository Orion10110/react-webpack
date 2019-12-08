'use strict'
import css from './modules/css-dev'
import devServer from './modules/dev-server'

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, css, devServer, {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
