const { resolve } = require('path')

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '@game/(.*)': resolve(__dirname, 'src/game/$1'),
  },
}
