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
					//primary:"#6EC277",

					secondary: "#ffc247",

					accent: "#ff5777",

					neutral: "#202020",

					"base-100": "#e6efee",

					info: "#e2e9df",

					success: "#00ff00",

					warning: "#fef3c7",

					error: "#f87171",
				},
				extend: {
					fontFamily: {
						bergman: ["var(--font-bergman)", "sans-serif"],
						acidGrotesk: ["var(--font-acid-grotesk)", "sans-serif"],
						testTiempos: ["var(--font-test-tiempos)", "serif"],
					},
				},
			},
		],
	},
	plugins: [
		require("daisyui"),
		function ({ addUtilities }: any) {
			addUtilities({
				".mask-gradient": {
					maskImage:
						"linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
				},
			});
		},
	],
};
export default config;
