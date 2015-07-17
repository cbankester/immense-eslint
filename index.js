if (!Object.assign) {
  Object.defineProperty(Object, "assign", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target) {
      "use strict";
      if (target === undefined || target === null) {
        throw new TypeError("Cannot convert first argument to object");
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }
        nextSource = Object(nextSource);

        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}

module.exports = {
  ecmaFeatures: {
    arrowFunctions: true,
    binaryLiterals: true,
    blockBindings: true,
    classes: true,
    defaultParams: true,
    destructuring: true,
    forOfgenerators: true,
    modules: true,
    objectLiteralComputedProperties: true,
    objectLiteralDuplicateProperties: true,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    octalLiterals: true,
    regexUFlag: true,
    regexYFlag: true,
    restParams: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    unicodeCodePointEscapes: true
  },
  env: {
    es6: true
  },
  rules: {
    // Possible Errors -- http://eslint.org/docs/rules/#possible-errors
    "comma-dangle": 1,
    "no-cond-assign": 0,
    "no-console": 0,
    "no-constant-condition": 0,
    "no-control-regex": 0,
    "no-debugger": 0,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 1,
    "no-extra-semi": 2,
    "no-func-assign": 1,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 1,
    "no-reserved-keys": 0,
    "no-sparse-arrays": 0,
    "no-unreachable": 2,
    "use-isnan": 2,
    "valid-jsdoc": 2,
    "valid-typeof": 2,
    "no-unexpected-multiline": 2,

    // Best Practices -- http://eslint.org/docs/rules/#best-practices
    "accessor-pairs": 1,
    "block-scoped-var": 2,
    "complexity": [1, 2],
    "consistent-return": 1,
    "curly": [1, "multi"],
    "default-case": 2,
    "dot-notation": 1,
    "dot-location": [1, "property"],
    "eqeqeq": 2,
    "guard-for-in": 2,
    "no-alert": 1,
    "no-caller": 2,
    "no-div-regex": 1,
    "no-else-return": 2,
    "no-empty-label": 1,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": [1, {exceptions: ["Object", "Array"]}],
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implied-eval": 2,
    "no-iterator": 2,
    "no-labels": 1,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-new": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-param-reassign": 2,
    "no-process-env": 0,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unused-expressions": 2,
    "no-void": 0,
    "no-warning-comments": 0,
    "no-with": 2,
    "radix": 2,
    "vars-on-top": 2,
    "wrap-iife": [2, "any"],
    "yoda": 2,

    // Strict Mode -- http://eslint.org/docs/rules/#strict-mode
    "strict": [2, "global"],

    // Variables -- http://eslint.org/docs/rules/#variables
    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-shadow-restricted-names": 2,
    "no-undef-init": 2,
    "no-undef": 2,
    "no-undefined": 2,
    "no-unused-vars": 2,
    "no-use-before-define": 2,

    // Stylistic Issues -- http://eslint.org/docs/rules/#stylistic-issues

    "array-bracket-spacing": 0,
    "brace-style": [2, "1tbs", {allowSingleLine: true}],
    "camelcase": 0,
    "comma-spacing": 2,
    "comma-style": 2,
    "computed-property-spacing": 2,
    "consistent-this": [2, "self"],
    "eol-last": 2,
    "func-names": 2,
    "func-style": [2, "declaration"],
    "indent": [2, 2],
    "key-spacing": 2,
    "lines-around-comment": 2,
    "linebreak-style": 2,
    "max-nested-callbacks": [2, 3],
    "new-cap": 2,
    "new-parens": 2,
    "newline-after-var": 0,
    "no-array-constructor": 2,
    "no-continue": 2,
    "no-inline-comments": 0,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": 2,
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-spaced-func": 2,
    "no-ternary": 0,
    "no-trailing-spaces": 2,
    "no-underscore-dangle": 2,
    "no-unneeded-ternary": 2,
    "object-curly-spacing": [2, "never"],
    "one-var": 0,
    "operator-assignment": [2, "always"],
    "operator-linebreak": [2, "after"],
    "padded-blocks": 0,
    "quote-props": 0,
    "quotes": 0,
    "semi-spacing": 2,
    "semi": 2,
    "sort-vars": 0,
    "space-after-keywords": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": [2, "never"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-return-throw-case": 2,
    "space-unary-ops": 2,
    "spaced-comment": [2, "always"],
    "wrap-regex": 0,

    // ECMAScript 6 -- http://eslint.org/docs/rules/#ecmascript-6
    "constructor-super": 2,
    "generator-star-spacing": 2,
    "no-this-before-super": 2,
    "no-var": 2,
    "object-shorthand": 2,
    "prefer-const": 2
  }
};
