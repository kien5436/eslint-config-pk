import globals from 'globals';

/** @type {import('eslint').Linter.Config} */
export default {
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
