import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#4fc27e",

					secondary: "#ffc247",

					accent: "#ff5777",

					neutral: "#202020",

					"base-100": "#e6efee",

					info: "#e2e9df",

					success: "#00ff00",

					warning: "#fef3c7",

					error: "#f87171",
				},
			},
		],
	},
	// eslint-disable-line global-require
	plugins: [require("daisyui")],
};
export default config;
