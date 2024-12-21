import shared from './shared.mjs';

/** @type {import('eslint').Linter.Config} */
export default {
  ...shared,
  name: 'pk/recommended',
  rules: {
    'eqeqeq': 'warn',
    'no-await-in-loop': 'warn',
    'no-shadow': 'warn',
    'no-case-declarations': 'off',
    'no-console': 'off',
  },
}
