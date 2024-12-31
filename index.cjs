const pluginJs = require('@eslint/js');

const recommended = require('./src/recommended.cjs');
const strict = require('./src/strict.cjs');
const stylistic = require('./src/stylistic.cjs');

module.exports = {
  all: [
    pluginJs.configs.recommended,
    recommended,
    strict,
    stylistic,
  ],
  recommended,
  strict,
  stylistic,
};
