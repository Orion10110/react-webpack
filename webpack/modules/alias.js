const utils = require('../utils')

module.exports = {
  resolve: {
    alias: {
      pages: utils.resolve('src/components/pages'),
      components: utils.resolve('src/components'),
      router: utils.resolve('src/router'),
      images: utils.resolve('src/images'),
      $scss: utils.resolve('src/scss'),
      services: utils.resolve('src/services'),
      constants: utils.resolve('src/constants'),
      fonts: utils.resolve('src/fonts'),
      $redux: utils.resolve('src/redux')
    }
  }
}
