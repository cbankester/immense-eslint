var common = require('./index.js');

module.exports = {
  ecmaFeatures: Object.assign(common.ecmaFeatures, {

  }),
  env: Object.assign(common.env, {
    browser: true
  }),
  rules: Object.assign(common.rules, {

  })
};
