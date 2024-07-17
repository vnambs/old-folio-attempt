import prettier from "eslint-plugin-prettier";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...compat.extends(
		"next/core-web-vitals",
		"airbnb-base",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"prettier",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
		"plugin:sonarjs/recommended",
		"plugin:security/recommended",
		"plugin:storybook/recommended",
		"eslint:recommended"
	),
	{
		plugins: {
			prettier,
			"@typescript-eslint": typescriptEslint,
			react: fixupPluginRules(react),
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},

			parser: tsParser,
			ecmaVersion: 2021,
			sourceType: "module",

			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		settings: {
			react: {
				version: "detect",
			},

			"import/resolver": {
				node: {
					extensions: [".ts", ".tsx"],
				},
			},
		},

		rules: {
			"@typescript-eslint/no-unused-vars": "error",
			"@typescript-eslint/no-explicit-any": "warn",
			"react/react-in-jsx-scope": "off",

			"react/jsx-filename-extension": [
				1,
				{
					extensions: [".ts", ".tsx", ".js", ".jsx"],
				},
			],

			"react/jsx-props-no-spreading": "off",

			"import/extensions": [
				"error",
				"ignorePackages",
				{
					js: "never",
					jsx: "never",
					ts: "never",
					tsx: "never",
				},
			],

			"jsx-a11y/anchor-is-valid": [
				"error",
				{
					components: ["Link"],
					specialLink: ["hrefLeft", "hrefRight"],
					aspects: ["invalidHref", "preferButton"],
				},
			],

			"no-nested-ternary": "off",
			"import/prefer-default-export": "off",

			"@typescript-eslint/array-type": [
				"warn",
				{
					default: "array",
				},
			],

			"@typescript-eslint/consistent-type-assertions": [
				"warn",
				{
					assertionStyle: "as",
					objectLiteralTypeAssertions: "never",
				},
			],

			"react/jsx-fragments": ["warn", "syntax"],
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
			"react/prop-types": "off",

			"import/no-extraneous-dependencies": [
				"error",
				{
					devDependencies: [
						"**/*.stories.*",
						"**/.storybook/**/*.*",
						"**/daisyui/**/*.*",
					],
					peerDependencies: true,
				},
			],

			"react/button-has-type": "warn",
			"react/no-array-index-key": "warn",

			"import/no-unresolved": [
				2,
				{
					commonjs: true,
				},
			],
		},
	},
];
