import React from "react";
import ServiceSlider from "@/components/service-slider";
import ServicesCard from "@/components/services-card";
import { useCursor } from "@/context/CursorContext";

interface MyServicesSectionProps {
	background: string;
}
const imageSources = [
	"/services/php.png",
	"/services/laravel.png",
	"/services/html5.png",
	"/services/Javascript.png",
	"/services/css.png",
	"/services/typescript.png",
	"/services/jquerry.png",
	"/services/Bootstrap.png",
	"/services/react.png",
	"/services/sass.png",
	"/services/nodejs.png",
	"/services/wordpress.png",
	"/services/gitlab.png",
	"/services/github.png",
];

const generateImageObjects = () =>
	imageSources.flatMap((src, index) => [
		{ src, alt: `image-${index + 1}` },
		{ src, alt: `image-${index + 1}-copy` },
	]);

const placeholderImages = generateImageObjects();

const MyServicesSection = ({ background }: MyServicesSectionProps) => {
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
			id="my-services"
			className="flex md:grid w-full place-items-center bg-center min-h-screen"
			style={{ backgroundImage: background }}
		>
			<div className="relative grid top-16">
				<ServiceSlider
					imgs={placeholderImages}
					carouselId="placeholder-carousel"
					classNameCarousel="rounded-box"
				/>
				<div
					className="place-items-center max-w-screen-sm md:max-w-full grid md:w-auto md:flex md:flex-row md:gap-4 mx-auto p-4"
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
			</div>
		</section>
	);
};

export default MyServicesSection;
