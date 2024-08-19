// src/data/servicesData.ts

export interface Service {
	number: string;
	title: string;
	description: string;
	linkText: string;
	link: string;
}

export const servicesData: Service[] = [
	{
		number: "01",
		title: "WEB DESIGN",
		description:
			"Visually stunning web design that captivate your audience by blending your brand voice and customer needs.",
		linkText: "ABOUT WEB DESIGN",
		link: "https://www.google.com",
	},
	{
		number: "02",
		title: "WEB DEVELOPMENT",
		description:
			"Visually stunning web development that captivate your audience by blending your brand voice and customer needs.",
		linkText: "ABOUT WEB DEVELOPMENT",
		link: "https://www.eufonie.com",
	},
	{
		number: "03",
		title: "SEO",
		description:
			"Visually stunning SEO that captivate your audience by blending your brand voice and customer needs.",
		linkText: "ABOUT SEO",
		link: "https://www.yahoo.com",
	},
];
