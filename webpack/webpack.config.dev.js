'use strict'
import css from './modules/css-dev'
import devServer from './modules/dev-server'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const merge = require('webpack-merge')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, css, devServer, {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
