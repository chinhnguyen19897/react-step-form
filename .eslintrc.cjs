module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: 'jsx' },
  plugins: ['react-refresh', 'react-hooks', '@typescript-eslint/eslint-plugin', 'prettier'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'quotes': [2, "single", { "allowTemplateLiterals": true }],
    'react/prop-types': 0,
    'linebreak-style': [2, "unix"],
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
    '@typescript-eslint/explicit-module-boundary-types': [0],
    '@typescript-eslint/no-namespace': [0],
    '@typescript-eslint/no-empty-function': [0],
    'react-hooks/exhaustive-deps': [1],
    'no-duplicate-case': "error"
  },
}
