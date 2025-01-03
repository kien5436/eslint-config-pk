import shared from './shared.mjs';

/** @type {import('eslint').Linter.Config} */
export default {
  ...shared,
  name: 'pk/recommended',
  rules: {
    eqeqeq: 'warn',
    'no-await-in-loop': 'warn',
    'no-case-declarations': 'off',
    'no-console': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-shadow': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-var': 'warn',
  },
};
