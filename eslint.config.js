"use strict";

const { config } = require("@susisu/eslint-config");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const vitestPlugin = require("eslint-plugin-vitest");
const globals = require("globals");

module.exports = config({}, [
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
      vitest: vitestPlugin,
    },
  },
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.browser,
      },
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
    },
  },
  {
    files: ["src/**/*.spec.ts", "src/**/__tests__/**/*.ts"],
    rules: {
      ...vitestPlugin.configs.recommended.rules,
    },
  },
  {
    files: ["*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
  },
]);
