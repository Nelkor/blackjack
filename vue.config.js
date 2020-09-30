const path = require('path')

const resolve = module => path.resolve(__dirname, `src/modules/${module}`)
const createAlias = (acc, cur) => ({ ...acc, [`@${cur}`]: resolve(cur) })

module.exports = {
  configureWebpack: {
    resolve: {
      alias: [
        'engine',
        'ui',
        'view',
      ].reduce(createAlias, {}),
    },
  },
}
