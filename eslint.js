module.exports = {
  'env': {
    'es2021': true,
    'node': true,
  },
  'extends': './eslint-base.js',
  'ignorePatterns': [
    '**/node_modules/**',
  ],
  'parserOptions': { 'ecmaVersion': 12 },
};