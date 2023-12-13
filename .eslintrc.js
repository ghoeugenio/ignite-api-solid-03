module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': ['off'],
    'spaced-comment': ['off'],
    'no-unused-vars': ['off'],
    'no-error-on-unmatched-pattern': ['off']
  }
};
