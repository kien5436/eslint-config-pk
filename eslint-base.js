module.exports = {
  'extends': 'eslint:recommended',
  'reportUnusedDisableDirectives': true,
  'rules': {
    'array-callback-return': 'error',
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'arrow-parens': [
      'error',
      'always',
    ],
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': [
      'error',
      'stroustrup',
    ],
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
        'imports': 'always-multiline',
        'objects': 'always-multiline',
      },
    ],
    'comma-spacing': 'error',
    'consistent-return': 'error',
    'dot-location': [
      'error',
      'property',
    ],
    'eol-last': [
      'error',
      'never',
    ],
    'func-call-spacing': [
      'error',
      'never',
    ],
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 },
    ],
    'key-spacing': 'error',
    'lines-between-class-members': 'error',
    'newline-per-chained-call': 'warn',
    'no-case-declarations': 'off',
    'no-confusing-arrow': 'error',
    'no-console': 'off',
    'no-eq-null': 'error',
    'no-floating-decimal': 'off',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-prototype-builtins': 'off',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'no-useless-backreference': 'warn',
    'no-useless-computed-key': 'error',
    'no-useless-return': 'error',
    'object-curly-newline': [
      'error',
      { 'multiline': true },
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'object-shorthand': [
      'error',
      'always',
      { 'avoidExplicitReturnArrows': true },
    ],
    'one-var': [
      'error',
      'never',
    ],
    'prefer-const': [
      'error',
      {
        'destructuring': 'all',
        'ignoreReadBeforeAssign': false,
      },
    ],
    'quotes': [
      'error',
      'single',
      { 'avoidEscape': true },
    ],
    'semi': [
      'error',
      'always',
      { 'omitLastInOneLineBlock': true },
    ],
    'sort-imports': [
      'error',
      {
        'allowSeparatedGroups': true,
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
        'ignoreMemberSort': false,
      },
    ],
    'space-before-blocks': [
      'error',
      'always',
    ],
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'asyncArrow': 'always',
        'named': 'never',
      },
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        'nonwords': false,
        'words': true,
      },
    ],
    'yoda': [
      'error',
      'always',
    ],
  },
}
