const utils = require('../utils')

module.exports = {
  module: {
    rules: [{
      test: /\.pug$/,
      use: {
        loader: 'pug-loader',
        options: {
          root: utils.resolve('src/pages')
        }
      }
    }]
  }
}
