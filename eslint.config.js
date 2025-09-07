import js from "@eslint/js"
import json from "@eslint/json"
import markdown from "@eslint/markdown"
import tanstackQuery from "@tanstack/eslint-plugin-query"
import importZod from "eslint-plugin-import-zod"
import jsxA11y from "eslint-plugin-jsx-a11y"
import prettier from "eslint-plugin-prettier"
import reactHooks from "eslint-plugin-react-hooks"
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"
import { defineConfig } from "eslint/config"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
  {
    // Global ignores
    ignores: [
      "node_modules",
      "build",
      ".vscode",
      ".github",
      ".react-router",
      "**/*.config.js",
      "**/*.config.ts",
      "pnpm-lock.yaml",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...tseslint.configs.recommended,
  {
    files: ["app/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      ...pluginReactConfig.plugins,
      "react-hooks": reactHooks,
      "@tanstack/query": tanstackQuery,
      "import-zod": importZod,
      "jsx-a11y": jsxA11y,
    },
    languageOptions: {
      ...pluginReactConfig.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginReactConfig.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      ...reactHooks.configs.recommended.rules,
      ...tanstackQuery.configs.recommended.rules,
      "import-zod/prefer-zod-namespace": "error",
      ...jsxA11y.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
])
