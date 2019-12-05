const images = require('./images')
const css = require('./css')
const pug = require('./pug')
const alias = require('./alias')
const js = require('./js')
const plugins = require('./plugins')
const fonts = require('./fonts')
const typescript = require('./typescript')

const merge = require('webpack-merge')

module.exports = merge(
  alias,
  pug,
  js,
  typescript,
  // css,
  images,
  fonts,
  plugins)
