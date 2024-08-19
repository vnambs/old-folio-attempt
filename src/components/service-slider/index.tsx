import React, { useMemo, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { rangeNumber } from "@/lib/rangeNumber";
import { iconContainerAnim, iconsAnim } from "@/lib/services-animations";
import { extendArray } from "@/lib/shuffle";
import { shuffleArray } from "@/lib/fisherYatesShuffle";
import { useScreenDimensions } from "@/hooks/useScreenDimensions";
import { LogoList } from "./icon";

interface ServicesBackgroundProps {
	children: React.ReactNode;
}

export default function Index({ children }: ServicesBackgroundProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { screenWidth, screenHeight } = useScreenDimensions();

	const logoSize = 90; // Size in pixels
	const totalLogosNeeded =
		Math.ceil(screenWidth / logoSize) * Math.ceil(screenHeight / logoSize);

	const extendedLogos = useMemo(
		() =>
			extendArray(
				shuffleArray(LogoList),
				Math.ceil(totalLogosNeeded / LogoList.length)
			),
		[totalLogosNeeded]
	);

	return (
		<>
			<motion.div className="blur-sm mask-gradient" ref={ref}>
				<motion.div
					variants={iconContainerAnim}
					initial={isInView ? "init" : "end"}
					animate={isInView ? "anim" : ""}
					exit="end"
					className="relative top-0 bottom-0 flex flex-wrap justify-around items-center overflow-hidden content-stretch"
				>
					<AnimatePresence>
						{isInView &&
							extendedLogos
								.slice(0, totalLogosNeeded)
								.map((logo, index) => (
									<motion.div
										key={index}
										variants={iconsAnim}
										className="flex items-center opacity-50 justify-center w-[90px] h-[90px]"
									>
										<img
											src={logo.src}
											alt={logo.alt}
											style={{
												width:
													rangeNumber(50, 40, 120) /
													1.9,
											}}
										/>
									</motion.div>
								))}
					</AnimatePresence>
				</motion.div>
			</motion.div>
			{children}
		</>
	);
}
