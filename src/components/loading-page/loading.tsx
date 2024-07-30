import { motion, useAnimate } from "framer-motion";
import "./style.css";
import { useEffect, useRef } from "react";

export default function TextSpinnerLoader() {
	const text = "LOADING . GREAT PORTFOLIO .";
	const characters = text.split("");

	const radius = 80;
	const fontSize = "18px";
	const letterSpacing = 14;

	const [scope, animate] = useAnimate();
	const containerRef = useRef(null);

	useEffect(() => {
		const animateLoader = async () => {
			const letterAnimation: any[] = [];
			characters.forEach((_, i) => {
				letterAnimation.push([
					`.letter-${i}`,
					{ opacity: 0 },
					{ duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" },
				]);
			});
			characters.forEach((_, i) => {
				letterAnimation.push([
					`.letter-${i}`,
					{ opacity: 1 },
					{ duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" },
				]);
			});
			animate(letterAnimation, {
				repeat: Infinity,
			});
			animate(
				containerRef.current,
				{ rotate: 360 },
				{ duration: 4, ease: "linear", repeat: Infinity }
			);
		};
		animateLoader();
	}, [animate, characters]);

	return (
		<motion.div className="bg-[#0a0f0b] min-h-screen flex justify-center items-center">
			<motion.div
				ref={containerRef}
				className="circle"
				style={{ width: radius * 2, position: "relative" }}
			>
				<p aria-label={text} />
				<p aria-hidden="true" className="text" ref={scope}>
					{characters.map((ch, i) => (
						<motion.span
							key={i}
							className={`letter letter-${i}`}
							style={{
								transformOrigin: `0 ${radius}px`,
								transform: `rotate(${i * letterSpacing}deg)`,
								fontSize,
								position: "absolute",
							}}
						>
							{ch}
						</motion.span>
					))}
				</p>
			</motion.div>
		</motion.div>
	);
}
