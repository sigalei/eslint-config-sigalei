module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['jsx-a11y', 'import', 'prettier'],
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: 'obj|args|context|info' }],
    curly: ['error', 'all'],
    'no-console': 0,
    'comma-dangle': 0,
    'class-methods-use-this': 0,
    'max-len': [
      2,
      100,
      2,
      {
        ignoreUrls: true
      }
    ],
    'generator-star-spacing': 0,
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id', '_source', '_fields', '_values', '_enumConfig', '_name', '_score']
      }
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 80
      }
    ]
  }
}
