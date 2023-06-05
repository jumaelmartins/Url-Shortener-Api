module.exports = {
  parser: '@typescript-eslint-parser',
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'standard-with-typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}
