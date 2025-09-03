import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import reactHooks from 'eslint-plugin-react-hooks';

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
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		files: ["app/**/*.{js,jsx,ts,tsx}"],
		plugins: {
			"react-hooks": reactHooks
		},
		extends: ['react-hooks/recommended'],
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
]);
