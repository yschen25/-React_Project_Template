module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'max-len': 'off',
    'object-curly-spacing': 0,
    'operator-linebreak': [
      1,
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    'require-jsdoc': 0, // let's not do this for assignment
    indent: 0, // we have auto-formatter
  },
};
