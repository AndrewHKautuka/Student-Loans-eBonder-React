import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from "eslint-plugin-prettier";

export default defineConfig([
	{
		// Global ignores
		ignores: [
			"node_modules",
			"build",
			".vscode",
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
				...globals.node
			}
		}
	},
	...tseslint.configs.recommended,
	{
		files: ["app/**/*.{js,jsx,ts,tsx}"],
		plugins: {
			...pluginReactConfig.plugins,
			"react-hooks": reactHooks
		},
		languageOptions: {
			...pluginReactConfig.languageOptions,
			globals: {
				...globals.browser,
				...globals.node
			}
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
		},
	},
	{
		files: ["**/*.json"],
		plugins: { json },
		language: "json/json",
		extends: ["json/recommended"]
	},
	{
		files: ["**/*.md"],
		plugins: { markdown },
		language: "markdown/gfm",
		extends: ["markdown/recommended"]
	},
	{
		files: ["**/*.css"],
		plugins: { css },
		language: "css/css",
		extends: ["css/recommended"]
	},
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		plugins: {
			prettier
		},
		rules: {
			"prettier/prettier": "error"
		}
	}
]);
