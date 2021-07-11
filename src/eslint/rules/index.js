'use strict';

const path = require('path');

module.exports = {
  extends: [require.resolve('./base')],
  root: true,
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          jsx: true,
          useJSXTextNode: true,
        },
        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: false,
        project: [
          path.resolve(path.join(process.cwd(), 'tsconfig.json')) ||
            `"${path.resolve(path.normalize('../../../tsconfig.json'))}"`,
        ],
      },
      rules: {
        // Add TypeScript specific rules (and turn off ESLint equivalents)
        'default-case': 'off',
        'dot-location': ['warn', 'property'],
        'eol-last': 'off',
        'no-array-constructor': 'off',
        'no-dupe-class-members': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        quotes: ['warn', 'double'],

        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-array-constructor': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true }],
        '@typescript-eslint/no-useless-constructor': 'off',
        '@typescript-eslint/no-var-requires': 'off',

        '@typescript-eslint/no-use-before-define': [
          'warn',
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],

        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/display-name': 'off',
        'react/no-unescaped-entities': 'off',
        'react/prop-types': 'warn',
      },
    },
  ],
};
