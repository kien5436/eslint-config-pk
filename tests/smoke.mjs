import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import path from 'node:path';
import { test } from 'node:test';

import { ESLint } from 'eslint';

import pk from '../index.mjs';

const require = createRequire(import.meta.url);
const cwd = process.cwd();

const eslint = new ESLint({
  cwd,
  overrideConfigFile: true,
  overrideConfig: pk,
});

/**
 * Lint code as if it lived at `tests/fixtures/<name>`.
 * @param {string} name fixture file name, e.g. `sample.cjs`
 * @param {string} code source code to lint
 * @returns {Promise<import('eslint').Linter.LintMessage[]>} lint messages
 */
async function lint(name, code) {
  const filePath = path.join(cwd, 'tests', 'fixtures', name);
  const [result] = await eslint.lintText(code, { filePath });

  return result.messages;
}

test('exports keep their shape', () => {
  const cjs = require('../index.cjs');

  assert.ok(Array.isArray(pk));
  assert.deepEqual(Object.keys(cjs).sort(), ['all', 'recommended', 'strict', 'stylistic']);
  assert.equal(cjs.all.length, pk.length);
});

test('ESM .js is accepted', async () => {
  assert.deepEqual(await lint('esm.js', 'export const value = 1;\n'), []);
});

test('CommonJS syntax in .js is a parse error', async () => {
  const messages = await lint('cjs-in-js.js', 'return 1;\n');

  assert.equal(messages.length, 1);
  assert.equal(messages[0].fatal, true);
});

test('.cjs allows CommonJS top-level return', async () => {
  assert.deepEqual(await lint('cjs-return.cjs', 'return 1;\n'), []);
});

test('.cjs resolves Node globals', async () => {
  assert.deepEqual(await lint('cjs-globals.cjs', "module.exports = require('node:path');\n"), []);
});

test('.cjs reports top-level await', async () => {
  const messages = await lint('cjs-await.cjs', 'await Promise.resolve();\n');

  assert.equal(messages.length, 1);
  assert.equal(messages[0].fatal, true);
});

test('.ts needs a consumer-supplied parser', async () => {
  const messages = await lint('types.ts', 'export const value: number = 1;\n');

  assert.equal(messages.length, 1);
  assert.equal(messages[0].fatal, true);
});
