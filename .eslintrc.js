module.exports = {
  root: true,
  extends: ['google', 'plugin:vue/essential', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  rules: {
    "require-jsdoc": "off"
  }
};
