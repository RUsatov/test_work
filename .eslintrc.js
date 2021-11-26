module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multi-spaces': 'off',
    'camelcase': 'off',
    'indent': 'off',
    'max-len': 'off',
    'node/no-deprecated-api': 'off',
    'multiline-ternary': 'off',
    'no-async-promise-executor': 'off',
    'no-case-declarations': 'off',
    'no-extra-boolean-cast': 'off',
    'no-misleading-character-class': 'off',
    'no-mixed-operators': 'off',
    'no-useless-escape': 'off',
    'no-use-before-define': 'off',
    'no-tabs': 'off',
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'unicode-bom': 'off',
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'after' } }],
    'comma-dangle': ['error', 'always-multiline'],
    'curly': ['error', 'all'],
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'quote-props': ['error', 'consistent-as-needed'],
    'semi': ['error', 'always'],
    'space-before-function-paren': ["error", "never"],
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
  }
}
