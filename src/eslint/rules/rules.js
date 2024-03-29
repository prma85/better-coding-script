const restrictedGlobals = require('confusing-browser-globals');

// Inspired by https://github.com/airbnb/javascript but less opinionated.
// https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base/rules

module.exports = {
  'default-case': ['warn', { commentPattern: '^no default$' }],
  'dot-location': ['warn', 'property'],

  'eol-last': 'off',
  indent: [
    'warn',
    2,
    {
      SwitchCase: 1,
      outerIIFEBody: 0,
      FunctionDeclaration: { body: 1, parameters: 'off' },
      ignoredNodes: [
        'ConditionalExpression > ObjectExpression',
        'ObjectExpression > ObjectExpression',
        'ObjectExpression > FunctionExpression',
      ],
    },
  ],
  'new-cap': 'off',
  'no-duplicate-case': 'warn',
  'no-empty-character-class': 'warn',
  'no-empty-pattern': 'warn',
  'no-eval': 'warn',
  'no-ex-assign': 'warn',
  'no-extend-native': 'warn',
  'no-extra-bind': 'warn',
  'no-extra-label': 'warn',
  'no-fallthrough': 'warn',
  'no-func-assign': 'warn',
  'no-implied-eval': 'warn',
  'no-invalid-regexp': 'warn',
  'no-iterator': 'warn',
  'no-label-var': 'warn',
  'no-labels': ['warn', { allowLoop: true, allowSwitch: false }],
  'no-lone-blocks': 'warn',
  'no-loop-func': 'warn',
  'no-mixed-operators': [
    'warn',
    {
      groups: [
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: false,
    },
  ],
  'no-multi-str': 'warn',
  'no-native-reassign': 'warn',
  'no-negated-in-lhs': 'warn',
  'no-new': 'off',
  'no-new-func': 'warn',
  'no-new-object': 'warn',
  'no-new-symbol': 'warn',
  'no-new-wrappers': 'warn',
  'no-obj-calls': 'warn',
  'no-octal': 'warn',
  'no-octal-escape': 'warn',
  'no-underscore-dangle': 'off',
  'no-regex-spaces': 'warn',
  'no-restricted-syntax': ['warn', 'WithStatement'],
  'no-script-url': 'warn',
  'no-self-assign': 'warn',
  'no-self-compare': 'warn',
  'no-sequences': 'warn',
  'no-shadow-restricted-names': 'warn',
  'no-sparse-arrays': 'warn',
  'no-template-curly-in-string': 'warn',
  'no-this-before-super': 'warn',
  'no-throw-literal': 'warn',
  'no-undef': 'error',
  'no-restricted-globals': ['error'].concat(restrictedGlobals),
  'no-unreachable': 'warn',
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    },
  ],
  'no-unused-labels': 'warn',
  'no-unused-vars': [
    'warn',
    {
      args: 'none',
      ignoreRestSiblings: true,
    },
  ],
  'no-use-before-define': [
    'warn',
    {
      functions: false,
      classes: false,
      variables: false,
    },
  ],
  'no-useless-computed-key': 'warn',
  'no-useless-concat': 'warn',
  'no-useless-constructor': 'warn',
  'no-useless-escape': 'warn',
  'no-useless-rename': [
    'warn',
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],
  'no-with': 'warn',
  'no-whitespace-before-property': 'warn',
  'require-yield': 'warn',
  'rest-spread-spacing': ['warn', 'never'],
  strict: 'off',
  'unicode-bom': ['warn', 'never'],
  'use-isnan': 'warn',
  'valid-typeof': 'warn',
  'no-restricted-properties': [
    'error',
    {
      object: 'require',
      property: 'ensure',
      message:
        'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
    },
    {
      object: 'System',
      property: 'import',
      message:
        'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
    },
  ],
  'getter-return': 'warn',

  'no-var': 'error',
  'prefer-const': 'warn',

  'react/jsx-uses-react': 'warn',
  'react/jsx-uses-vars': 'warn',
  'react/prop-types': 'off',
  'react/jsx-quotes': 'off',
  'react/no-unescaped-entities': 'off',
  'sonarjs/no-duplicate-string': 'off',
  'sonarjs/no-nested-template-literals': 'off',
  'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
  'unicorn/no-array-for-each': 'off',
  'unicorn/no-null': 'off',
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        camelCase: true,
        pascalCase: true,
        kebabCase: true,
      },
      ignore: ['/^ID.js$/'],
    },
  ],
  'unicorn/prevent-abbreviations': [
    'error',
    {
      replacements: {
        e: false,
        dev: false,
        env: false,
        res: false,
        props: false,
        params: false,
        ref: false,
        val: false,
        cmd: {
          command: true,
        },
        errCb: {
          handleError: true,
        },
      },
    },
  ],
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        '**/__tests__/**/*.ts?x',
        '**/*.spec.ts',
        '**/*.spec.tsx',
        '**/*.stories.ts?x',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/helpers/tests/*.*',
        '**/setupTests.ts',
        '**/test-utility.tsx',
        '**/test/*.tsx',
        '**/utility-test.ts',
      ],
    },
  ],
  'import/no-anonymous-default-export': 'off',
  'linebreak-style': 'off',
};
