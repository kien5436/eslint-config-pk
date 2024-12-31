import stylistic from '@stylistic/eslint-plugin';

/** @type {import('eslint').Linter.Config} */
export default {
  name: 'pk/stylistic',
  plugins: { '@stylistic': stylistic },
  rules: {
    '@stylistic/indent-binary-ops': ['error', 2],
    '@stylistic/array-bracket-newline': 'error',
    '@stylistic/array-bracket-spacing': 'error',
    '@stylistic/array-element-newline': [
      'error',
      {
        consistent: true,
        multiline: true,
      },
    ],
    '@stylistic/arrow-parens': 'error',
    '@stylistic/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/generator-star-spacing': ['error', 'after'],
    '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
    '@stylistic/line-comment-position': 'off',
    '@stylistic/linebreak-style': 'off',
    '@stylistic/lines-around-comment': 'off',
    '@stylistic/lines-between-class-members': [
      'error',
      {
        enforce: [
          {
            prev: 'method',
            next: 'method',
            blankLine: 'always',
          },
        ],
      },
    ],
    '@stylistic/max-len': 'off',
    '@stylistic/max-statements-per-line': 'off',
    '@stylistic/multiline-comment-style': 'off',
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],
    '@stylistic/no-confusing-arrow': 'off',
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/object-curly-newline': ['error', { multiline: true }],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    '@stylistic/operator-linebreak': ['error', 'before'],
    '@stylistic/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['var', 'let', 'const', 'directive'], next: '*' },
      { blankLine: 'any', prev: ['var', 'let', 'const', 'directive'], next: ['var', 'let', 'const', 'directive'] },
      { blankLine: 'always', prev: '*', next: ['return', 'break', 'continue'] },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: ['import', 'export', 'cjs-import', 'cjs-export'], next: '*' },
      { blankLine: 'any', prev: ['import', 'cjs-import'], next: ['import', 'cjs-import'] },
    ],
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/quotes': [
      'error',
      'single',
      { avoidEscape: true },
    ],
    '@stylistic/rest-spread-spacing': ['error', 'never'],
    '@stylistic/semi': [
      'error',
      'always',
      { omitLastInOneLineBlock: true },
    ],
    '@stylistic/space-before-blocks': ['error', 'always'],
    '@stylistic/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/space-unary-ops': [
      'error',
      {
        nonwords: false,
        words: true,
      },
    ],
  },
};
