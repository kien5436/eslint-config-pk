# eslint-config-pk
My eslint shareable config for common cases in JS

[![npm](https://img.shields.io/npm/v/eslint-config-pk?style=flat-square)](https://www.npmjs.com/package/eslint-config-pk)

This version use new Eslint's flat config syntax. For older support, use v1.x instead.

Works with ESLint 9 and ESLint 10. ESLint 10 itself requires Node `^20.19.0 || ^22.13.0 || >=24`.

## Installation
```sh
pnpm add -D eslint @stylistic/eslint-plugin eslint-config-pk
# or
npm i -D eslint @stylistic/eslint-plugin eslint-config-pk
# or
yarn add -D eslint @stylistic/eslint-plugin eslint-config-pk
```

## Usage
This package already includes recommended eslint rules in `all` config.

There're several configs: recommended, strict, stylistic and all of them. Most of the time, you should use `all` config. However, you can extend a specific config as you need.

ESM:
```js
// eslint.config.js
import pk from 'eslint-config-pk';

export default [
  ...pk,
  // other configs
]
```

Or with `defineConfig`:
```js
// eslint.config.js
import { defineConfig } from 'eslint/config';
import pk from 'eslint-config-pk';

export default defineConfig([
  { extends: pk.all },
  // other configs
]);
```

CommonJS:
```js
// eslint.config.cjs
const pk = require('eslint-config-pk');

module.exports = [...pk.all];
```

## Language support
- `.js`, `.mjs` and `.ts` files are parsed as ES modules, `.cjs` files are parsed as CommonJS.
- `.ts` files need a parser supplied by your own config (for example `typescript-eslint`). Without one, TypeScript syntax fails to parse.

## License
[MIT](LICENSE)
