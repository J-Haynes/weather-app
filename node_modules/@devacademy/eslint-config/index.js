const defaults = require('./core')

module.exports = {
  ...defaults,
  extends: [
    ...defaults.extends,
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
}
