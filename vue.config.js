const { resolve } = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@game': resolve(__dirname, 'src/game'),
      },
    },
  },
}
