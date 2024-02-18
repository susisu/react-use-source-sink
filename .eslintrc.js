"use strict";

module.exports = {
  plugins: ["jest", "jest-formatting"],
  overrides: [
    {
      files: ["*.{ts,tsx}"],
      extends: [
        "@susisu/eslint-config/preset/ts",
        "plugin:eslint-comments/recommended",
        "prettier",
      ],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      env: {
        es6: true,
      },
      rules: {
        "eslint-comments/no-unused-disable": "error",
      },
    },
    {
      files: ["*.{test,spec}.{ts,tsx}"],
      extends: ["plugin:jest/recommended", "plugin:jest-formatting/recommended"],
      env: {
        node: true,
        "jest/globals": true,
      },
      rules: {
        "@typescript-eslint/no-floating-promises": "off",
      },
    },
    {
      files: ["*.js"],
      extends: [
        "@susisu/eslint-config/preset/js",
        "plugin:eslint-comments/recommended",
        "prettier",
      ],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "script",
      },
      env: {
        es6: true,
        node: true,
      },
      rules: {
        "eslint-comments/no-unused-disable": "error",
      },
    },
  ],
};
