module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},

	env: {
		browser: true,
		node: true,
		es2021: true,
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

	plugins: ["prettier", "@typescript-eslint", "react"],
	extends: [
		"next/core-web-vitals",
		"plugin:@typescript-eslint/recommended",
		"airbnb",
		"prettier",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
		"plugin:sonarjs/recommended",
		"plugin:security/recommended",
		"plugin:storybook/recommended",
		"eslint:recommended",
	],

	rules: {
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-explicit-any": "error",
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
		// TypeScript rules
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
		// React rules
		"react/jsx-fragments": ["warn", "syntax"], // Shorthand syntax for React fragments
		"react/jsx-filename-extension": [
			"warn",
			{
				extensions: ["ts", "tsx"],
			},
		],
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: ["**/*.stories.*", "**/.storybook/**/*.*"],
				peerDependencies: true,
			},
		],
		"react/button-has-type": "warn",
	},
};
