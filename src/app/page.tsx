"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";

import styles from "./cursor.module.css";

// Dynamically import components
const Header = dynamic(() => import("@/components/Header"));
const Loading = dynamic(() => import("@/components/loading-page/loading"));
const ModalList = dynamic(() => import("@/components/modals-list"));
const MyServices = dynamic(() => import("@/components/my-services"));
const ServiceSlider = dynamic(() => import("@/components/service-slider"));
const ServicesCard = dynamic(() => import("@/components/services-card"));

// Define image sources and create placeholder images array
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

const background = "url('/home/background.jpg')";

export default function Home() {
	const ref = useRef<HTMLDivElement | null>(null);
	const [loading, setLoading] = useState(true);
	const pathname = usePathname();
	const [cursorText, setCursorText] = useState("");
	const [cursorVariant, setCursorVariant] = useState("default");

	const mouse = useMouse(ref, {
		enterDelay: 200,
		leaveDelay: 200,
	});

	let mouseXPosition = -100;
	let mouseYPosition = -100;

	if (mouse.x !== null) {
		mouseXPosition = mouse.clientX ?? 160;
	}

	if (mouse.y !== null) {
		mouseYPosition = mouse.clientY ?? 180;
	}

	const variants = {
		default: {
			opacity: 1,
			height: 15,
			width: 15,
			fontSize: "16px",
			backgroundColor: "#fff",
			x: mouseXPosition - 7,
			y: mouseYPosition - 7,
			transition: {
				type: "spring",
				mass: 0.6,
			},
		},
		project: {
			opacity: 1,
			backgroundColor: "#fff",
			color: "#000",
			height: 80,
			width: 80,
			fontSize: "18px",
			x: mouseXPosition - 32,
			y: mouseYPosition - 32,
		},
		contact: {
			opacity: 1,
			backgroundColor: "#FFBCBC",
			color: "#000",
			height: 64,
			width: 64,
			fontSize: "32px",
			x: mouseXPosition - 48,
			y: mouseYPosition - 48,
		},
	};

	const spring = {
		type: "spring",
		stiffness: 500,
		damping: 28,
		restDelta: 0.001,
	};

	function projectEnter() {
		setCursorText("");
		setCursorVariant("project");
	}

	function projectLeave() {
		setCursorText("");
		setCursorVariant("default");
	}

	function contactEnter() {
		setCursorText("👋");
		setCursorVariant("contact");
	}

	function contactLeave() {
		setCursorText("");
		setCursorVariant("default");
	}

	useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => setLoading(false), 8500); // Simulate loading delay

		return () => clearTimeout(timer);
	}, [pathname]);

	return (
		<div ref={ref}>
			{loading ? (
				<Loading />
			) : (
				<>
					<motion.div
						variants={variants}
						className={styles.cursorCircle}
						animate={cursorVariant}
						transition={spring}
					>
						<span className="cursorText">{cursorText}</span>
					</motion.div>
					<div className="grid place-items-center">
						<Header />
					</div>

					<div className="min-h-screen bg-black text-white">
						<main className="bg-repeat md:bg-cover grid w-full place-items-center bg-center min-h-screen ">
							<section
								className="bg-cover grid w-full place-items-center bg-center min-h-screen"
								style={{
									backgroundImage: background,
								}}
							>
								<div
									className="hero-content text-center"
									onMouseEnter={projectEnter}
									onMouseLeave={projectLeave}
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
											Premium Web Design, Development, and
											SEO services to help your business
											stand out.
										</p>
									</div>
								</div>
								<div className="bottom-2 absolute">
									<MyServices />
								</div>
							</section>

							<section
								id="my-services"
								className="flex md:grid w-full place-items-center bg-center min-h-screen"
								style={{
									backgroundImage: background,
								}}
								onMouseEnter={contactEnter}
								onMouseLeave={contactLeave}
							>
								<div className="relative grid top-16">
									<ServiceSlider
										imgs={placeholderImages}
										carouselId="placeholder-carousel"
										classNameCarousel="rounded-box"
									/>
									<div className="place-items-center max-w-screen-sm md:max-w-full grid md:w-auto md:flex md:flex-row md:gap-4 mx-auto p-4">
										{[
											"WEB DESIGN",
											"WEB DEVELOPMENT",
											"SEO",
										].map((title, index) => (
											<ServicesCard
												key={index}
												number={`0${index + 1}`}
												title={title}
												description={`Visually stunning ${title.toLowerCase()} that captivate your audience by blending your brand voice and customer needs.`}
												linkText={`ABOUT ${title}`}
												link="https://www.google.com"
											/>
										))}
									</div>
								</div>
							</section>

							<section
								id="my-work"
								className="flex md:grid w-full place-items-center bg-center min-h-screen"
								style={{
									backgroundImage: background,
								}}
							>
								<div className="relative grid top-16">
									<div className="place-items-center max-w-screen-sm md:max-w-full grid md:w-auto md:flex md:flex-row md:gap-4 mx-auto p-4">
										<ModalList />
									</div>
								</div>
							</section>
						</main>
					</div>
				</>
			)}
		</div>
	);
}
