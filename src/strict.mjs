import shared from './shared.mjs';

/** @type {import('eslint').Linter.Config} */
export default {
  ...shared,
  name: 'pk/strict',
  rules: {
    'array-callback-return': ['error', { checkForEach: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'block-scoped-var': 'error',
    'consistent-return': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'new-cap': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-this': 'error',
    'no-loop-func': 'error',
    'no-new': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-underscore-dangle': ['error', { allowFunctionParams: false }],
    'no-unneeded-ternary': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-expressions': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        allowNamedExports: false,
      },
    ],
    'no-useless-assignment': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-return': 'error',
    'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true }],
    'one-var': ['error', 'never'],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'prefer-object-has-own': 'error',
    'prefer-regex-literals': 'error',
    'prefer-template': 'error',
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: true,
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    curly: ['error', 'multi', 'consistent'],
    yoda: ['error', 'always'],
  },
};
