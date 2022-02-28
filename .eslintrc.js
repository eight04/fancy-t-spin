module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: false,
    es6: true
  },
  plugins: ["svelte3"],
  extends: ['eslint:recommended'],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022
  },

  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
      env: {
        browser: true
      }
    }
  ],

  rules: {
    semi: ['error', 'always'],
    'no-var': ['error'],
    'no-console': ['off'],
    'no-unused-vars': ['warn'],
    'no-mixed-spaces-and-tabs': ['warn'],
    'node/no-unpublished-require': ['off'],
  },
};
