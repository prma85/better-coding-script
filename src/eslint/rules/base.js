/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

// This file contains the minimum ESLint configuration required for Create
// React App support, and is used as the `baseConfig` for `eslint-loader`
// to ensure that user-provided configs don't need this boilerplate.

const rules = require('./rules');

module.exports = {
  root: true,

  parser: 'babel-eslint',

  plugins: ['react', 'react-hooks', 'jsx-a11y', 'eslint-plugin-prettier', 'sonarjs'],

  extends: [
    'airbnb',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
  ],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    mocha: true,
    node: true,
  },

  globals: {
    console: true,
    define: true,
    JSON: true,
    module: true,
  },

  ignorePatterns: [
    '**/bin',
    '**/cypress/cypress/**',
    '**/dist',
    '**/node_modules',
    '**/vendor',
    '**/webpack.*',
  ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      useJSXTextNode: true,
      warnOnUnsupportedTypeScriptVersion: false,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
  rules,
};
