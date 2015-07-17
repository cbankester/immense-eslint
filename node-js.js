var common = require('./index.js');

module.exports = {
  parser: "babel-eslint",
  ecmaFeatures: Object.assign(common.ecmaFeatures, {

  }),
  env: Object.assign(common.env, {
    node: true
  }),
  rules: Object.assign(common.rules, {
    "handle-callback-err": 2,
    "no-mixed-requires": 2,
    "no-new-require": 2,
    "no-path-concat": 2,
    "no-process-exit": 2,
    "no-restricted-modules": 0,
    "no-sync": 2
  })
};
