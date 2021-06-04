module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  // There are three modes for a rule in eslint: off, warn, and error.
  // "off" means 0 (turns the rule off completely)
  // "warn" means 1 (turns the rule on but won't make the linter fail)
  // "error" means 2 (turns the rule on and will make the linter fail)
  rules: {
    prettier: 2
  }
};
