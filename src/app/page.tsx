"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import { CursorProvider } from "@/context/CursorContext";
import CustomCursor from "@/components/custom-cursor";
import { AnimatePresence } from "framer-motion";

// const Header = dynamic(() => import("@/components/Header"));
import Header from "@/components/Header";
import LandingPage from "@/components/landing-page";
import MyServicesSection from "@/components/my-services/services";
import MyWorkSection from "@/components/work";

const Loading = dynamic(() => import("@/components/loading-page/loading"));

const background = "url('/home/background.jpg')";

const Home = () => {
	const ref = useRef<HTMLDivElement | null>(null);
	const stickyElements = useRef<HTMLDivElement | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// setLoading(true);
		// const timer = setTimeout(() => setLoading(false), 8500); // Simulate loading delay

		// return () => clearTimeout(timer);
		setLoading(true);
		(async () => {
			try {
				const LocomotiveScroll = (await import("locomotive-scroll"))
					.default;
				const locomotiveScroll = new LocomotiveScroll();

				setTimeout(() => {
					setLoading(false);
					document.body.style.cursor = "default";
					locomotiveScroll.scrollTo("[data-scroll-container]");
					window.scrollTo(0, 0); // Scroll to the top of the page
				}, 8500);
			} catch (error) {
				console.error(
					"Erreur lors du chargement de LocomotiveScroll:",
					error
				);
				setLoading(false);
			}
		})();
	}, []);

	return (
		<CursorProvider>
			<div ref={ref}>
				{loading ? (
					<AnimatePresence mode="wait">
						<Loading />
					</AnimatePresence>
				) : (
					<div>
						<div className="grid place-items-center">
							<Header ref={stickyElements} />
						</div>
						<CustomCursor
							parentRef={ref}
							stickyRef={stickyElements}
						/>
						<div className="min-h-screen bg-black text-white">
							<main className="bg-repeat md:bg-cover grid w-full place-items-center bg-center min-h-screen">
								<LandingPage background={background} />

								<MyServicesSection background={background} />

								<MyWorkSection background={background} />
							</main>
						</div>
					</div>
				)}
			</div>
		</CursorProvider>
	);
};

export default Home;
