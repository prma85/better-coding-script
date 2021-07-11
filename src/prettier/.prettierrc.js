module.exports = {
  ...require('airbnb-prettier-config'),
  parser: 'typescript',
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json',
        bracketSpacing: false,
        trailingComma: 'none',
      },
    },
    {
      files: '*.less',
      options: { parser: 'less' },
    },
    {
      files: '*.scss',
      options: { parser: 'scss' },
    },
    {
      files: '*.yml',
      options: {
        parser: 'yaml',
        singleQuote: true,
      },
    },
    {
      files: '*.md',
      options: { parser: 'markdown' },
    },
    {
      files: '*.mdx',
      options: { parser: 'mdx' },
    },
    {
      files: '*.js',
      options: { parser: 'babel' },
    },
  ],
};
