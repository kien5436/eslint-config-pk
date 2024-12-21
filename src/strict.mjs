import shared from './shared.mjs';

/** @type {import('eslint').Linter.Config} */
export default {
  ...shared,
  name: 'pk/strict',
  rules: {
    'array-callback-return': ['error', { checkForEach: true, }],
    'arrow-body-style': ['error', 'as-needed',],
    'block-scoped-var': 'error',
    'consistent-return': 'error',
    'no-eq-null': 'error',
    'no-loop-func': 'error',
    'no-prototype-builtins': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-return': 'error',
    'object-shorthand': ['error', 'always', { 'avoidExplicitReturnArrows': true },],
    'one-var': ['error', 'never',],
    'prefer-const': ['error', { 'destructuring': 'all', 'ignoreReadBeforeAssign': false, },],
    'sort-imports': ['error', { 'allowSeparatedGroups': true, 'ignoreCase': true, 'ignoreDeclarationSort': true, 'ignoreMemberSort': false, },],
    'yoda': ['error', 'always',],
  },
}
