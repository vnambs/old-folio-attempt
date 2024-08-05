import React, { useRef } from "react";
import ServiceSlider from "@/components/service-slider";
import ServicesCard from "@/components/services-card";
import EndScrollEffect from "@/components/end-scroll-effect";
import { useCursor } from "@/context/CursorContext";

interface MyServicesSectionProps {
	background: string;
}
// Define an array of image sources with corresponding colors
// const imageSources = [
// 	{ src: "/services/laravel.png", color: "#f0415f" },
// 	{ src: "/services/html5.png", color: "#e34c26" },
// 	{ src: "/services/Javascript.png", color: "#f7e02e" },
// 	{ src: "/services/css.png", color: "#1572b6" },
// 	{ src: "/services/typescript.png", color: "#007acc" },
// 	{ src: "/services/jquerry.png", color: "#0769ad" },
// 	{ src: "/services/Bootstrap.png", color: "#563d7c" },
// ];
// Define an array of image sources with corresponding colors
// const imageSourcesTwo = [
// 	{ src: "/services/php.png", color: "#ffcc00" },
// 	{ src: "/services/react.png", color: "#61dafb" },
// 	{ src: "/services/sass.png", color: "#c69" },
// 	{ src: "/services/nodejs.png", color: "#8cc84b" },
// 	{ src: "/services/wordpress.png", color: "#21759b" },
// 	{ src: "/services/gitlab.png", color: "#e24329" },
// 	{ src: "/services/github.png", color: "#181717" },
// ];

const MyServicesSection = ({ background }: MyServicesSectionProps) => {
	const container = useRef<HTMLDivElement | null>(null);
	const { setCursorText, setCursorVariant } = useCursor();

	const handleMouseEnter = () => {
		setCursorText("👋");
		setCursorVariant("contact");
	};

	const handleMouseLeave = () => {
		setCursorText("");
		setCursorVariant("default");
	};
	return (
		<section
			data-scroll-section
			id="my-services"
			className="flex md:grid w-full place-items-center bg-center min-h-screen"
			style={{ backgroundImage: background }}
			ref={container}
		>
			<div className="relative grid top-16 max-w-screen">
				<ServiceSlider>
					<div
						className="absolute items-center max-w-screen-sm md:max-w-full grid md:w-auto md:flex md:flex-row md:gap-4 justify-self-center md:top-1/4 p-4"
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						{["WEB DESIGN", "WEB DEVELOPMENT", "SEO"].map(
							(title, index) => (
								<ServicesCard
									key={index}
									number={`0${index + 1}`}
									title={title}
									description={`Visually stunning ${title.toLowerCase()} that captivate your audience by blending your brand voice and customer needs.`}
									linkText={`ABOUT ${title}`}
									link="https://www.google.com"
								/>
							)
						)}
					</div>
				</ServiceSlider>
			</div>
			<EndScrollEffect container={container} />
		</section>
	);
};

export default MyServicesSection;
