"use client";

import { useCursor } from "@/context/CursorContext";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import { testTiemposFonts } from "@/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import MyServices from "../my-services";

interface HeroSectionProps {
	background: string;
}
const slideUp = {
	initial: {
		y: 300,
	},
	enter: {
		y: 0,
		transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
	},
};
export default function LandingPages({ background }: HeroSectionProps) {
	const { setCursorText, setCursorVariant } = useCursor();
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	let xPercent = 0;
	let direction = -1;

	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}
		gsap.set(firstText.current, { xPercent });
		gsap.set(secondText.current, { xPercent });
		requestAnimationFrame(animate);
		xPercent += 0.1 * direction;
	};

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: 0.25,
				start: 0,
				end: window.innerHeight,
				onUpdate: e => {
					direction = e.direction * -1;
				},
			},
			x: "-500px",
		});
		requestAnimationFrame(animate);
	}, []);

	const handleMouseEnter = () => {
		setCursorText("");
		setCursorVariant("project");
	};

	const handleMouseLeave = () => {
		setCursorText("");
		setCursorVariant("default");
	};
	return (
		<motion.section
			data-scroll-section
			className="bg-cover grid w-full place-items-center bg-center min-h-screen overflow-hidden"
			style={{ backgroundImage: background }}
			initial="initial"
			animate="enter"
			variants={slideUp}
		>
			<div
				className="hero-content text-center"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				data-scroll
				data-scroll-speed={0.1}
			>
				<div className="w-full">
					<svg
						width="9"
						height="9"
						viewBox="0 0 9 9"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
							fill="white"
						/>
					</svg>
					<h2 className="text-5xl md:text-9xl font-bold">
						Web Developer
					</h2>
					<h3 className="text-3xl md:text-5xl italic"> & Designer</h3>
					<p
						className={` ${testTiemposFonts.className} text-xl md:text-xl mt-5 max-w-md mx-auto font-thin`}
					>
						Premium Web Design, Development, and SEO services to
						help your business stand out.
					</p>
				</div>
			</div>

			<div className="absolute top-[calc(100vh-350px)] ">
				<div ref={slider} className="relative whitespace-nowrap ">
					<p
						ref={firstText}
						className="relative m-0 text-white text-[230px] font-medium pr-[50px] opacity-20"
					>
						Freelance Developer -
					</p>
					<p
						ref={secondText}
						className="absolute left-full top-0 text-white text-[230px] font-medium pr-[50px] opacity-20"
					>
						Freelance Developer -
					</p>
				</div>
			</div>
			<div className="bottom-2 absolute">
				<MyServices />
			</div>
		</motion.section>
	);
}
