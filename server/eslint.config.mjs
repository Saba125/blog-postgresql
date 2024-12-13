import globals from "globals"
import tseslint from "@typescript-eslint/eslint-plugin"
import prettierConfig from "eslint-config-prettier"
import prettierPlugin from "eslint-plugin-prettier"

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  ...tseslint.configs.recommended,
  {
    // Disable ESLint rules that conflict with Prettier
    rules: {
      ...prettierConfig.rules,
    },
  },
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error", // Highlight Prettier issues as ESLint errors
    },
  },
]
