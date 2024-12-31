const globals = require('globals');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  linterOptions: { reportUnusedDisableDirectives: 'error' },
  files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.ts'],
};
