module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'google',
  ],
};
