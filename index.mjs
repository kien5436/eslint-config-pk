import pluginJs from '@eslint/js';

import recommended from './src/recommended.mjs';
import strict from './src/strict.mjs';
import stylistic from './src/stylistic.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  recommended,
  strict,
  stylistic,
];

export {
  recommended,
  strict,
  stylistic,
};
