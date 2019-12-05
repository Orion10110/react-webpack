const utils = require('../utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: utils.resolve('src/index.pug')
    })
  ]
}
