module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:jest/recommended'],
  plugins: ['jsx-a11y', 'import', 'prettier', 'jest'],
  env: {
    node: true,
    es6: true,
    'jest/globals': true
  },
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'max-lines-per-function': ['error', { 'max': 25 }],
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
        allow: ['_id', '_source', '_fields', '_values', '_enumConfig', '_name', '_score', '_type']
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
