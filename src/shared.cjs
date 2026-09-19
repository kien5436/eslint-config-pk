const globals = require('globals');

const sharedGlobals = {
  ...globals.browser,
  ...globals.node,
};

const linterOptions = { reportUnusedDisableDirectives: 'error' };

/** @type {import('eslint').Linter.Config} */
const moduleConfig = {
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: sharedGlobals,
  },
  linterOptions,
  files: ['**/*.js', '**/*.mjs', '**/*.ts'],
};

/** @type {import('eslint').Linter.Config} */
const commonjsConfig = {
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'commonjs',
    globals: sharedGlobals,
  },
  linterOptions,
  files: ['**/*.cjs'],
};

/** Shared base configs: ESM for `*.js`/`*.mjs`/`*.ts`, CommonJS for `*.cjs`. */
module.exports = [moduleConfig, commonjsConfig];
