import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"],
  },
  {
    rules: {
      "no-console": "warn", // warn on console.log
      "no-unused-vars": "error", // from TS plugin
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-undef": "error",
    },
    globals: {
      process: "readonly",
    },
  },
  {
    ignores: [".node_modules/*", "dist", "tsconfig.json"],
  },
]);
