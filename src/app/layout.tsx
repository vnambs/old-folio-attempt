import type { Metadata } from "next";
import React from "react";
import "../styles/globals.css";

const title = "Jonathan Voary - Professional Web Developer Portfolio";
const description =
	"Explore Jonathan Voary's professional portfolio showcasing expertise in web development, including projects on modern frameworks like Next.js, React, and more.";
const project = "Jonathan Voary Portfolio";
const url = "https://www.jonathanvoary.com";
const name = "Jonathan Voary";

export const metadata: Metadata = {
	title: {
		default: title,
		template: "%s | Jonathan Voary",
	},
	description,
	applicationName: project,
	authors: [{ name, url }],
	generator: "Next.js",
	keywords: [name, "Web Developer", "Next.js", "React", "Portfolio"],
	referrer: "origin",
	creator: name,
	publisher: name,
	robots: "index, follow",
	alternates: {
		canonical: url,
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	manifest: "/site.webmanifest",
	openGraph: {
		type: "website",
		url,
		title,
		description,
		siteName: project,
		images: [
			{
				url: "https://www.jonathanvoary.com/images/portfolio-thumbnail.jpg",
				alt: "Jonathan Voary's Portfolio Thumbnail",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@jonathanvoary",
		creator: "@jonathanvoary",
		title,
		description,
		images: "https://www.jonathanvoary.com/images/portfolio-thumbnail.jpg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
