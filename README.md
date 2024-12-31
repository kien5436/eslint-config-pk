# eslint-config-pk
My eslint shareable config for common cases in JS

[![npm](https://img.shields.io/npm/v/eslint-config-pk?style=flat-square)](https://www.npmjs.com/package/eslint-config-pk)

This version use new Eslint's flat config syntax. For older support, use v1.x instead.

## Installation
```sh
npm i -D eslint eslint-config-pk
# or
yarn add -D eslint eslint-config-pk
# or
pnpm add -D eslint eslint-config-pk
```

## Usage
This package already includes recommended eslint rules in `all` config.

There're several configs: recommended, strict, stylistic and all of them. Most of the time, you should use `all` config. However, you can extend a specific config as you need.

```js
// eslint.config.js
import pk from 'eslint-config-pk';

export default [
  ...pk,
  // other configs
]
```

CommonJS:
```js
// eslint.config.cjs

const pk = require('eslint-config-pk');

module.exports = [
  {
    extends: [
      ...pk.all,
      // other configs
    ],
  },
];
```

## License
[MIT](LICENSE)
