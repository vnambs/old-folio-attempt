"use client";

import { useCursor } from "@/context/CursorContext";
import MyServices from "../my-services";

interface HeroSectionProps {
	background: string;
}

export default function LandingPages({ background }: HeroSectionProps) {
	const { setCursorText, setCursorVariant } = useCursor();

	const handleMouseEnter = () => {
		setCursorText("");
		setCursorVariant("project");
	};

	const handleMouseLeave = () => {
		setCursorText("");
		setCursorVariant("default");
	};
	return (
		<section
			className="bg-cover grid w-full place-items-center bg-center min-h-screen"
			style={{ backgroundImage: background }}
		>
			<div
				className="hero-content text-center"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className="max-w-md">
					<h2 className="text-5xl md:text-7xl font-bold">
						Web Designer
					</h2>
					<h3 className="text-3xl md:text-5xl italic">
						{" "}
						& Developer
					</h3>
					<p className="text-xl md:text-2xl mt-5">
						Premium Web Design, Development, and SEO services to
						help your business stand out.
					</p>
				</div>
			</div>
			<div className="bottom-2 absolute">
				<MyServices />
			</div>
		</section>
	);
}
