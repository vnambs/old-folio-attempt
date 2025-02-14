import { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import "./style.css";
import { opacity, slideUp } from "./anim";

const words = [
	"Bonjour",
	"Ciao",
	"Olà",
	"やあ",
	"Hallå",
	"Guten tag",
	"Hallo",
	"Hello",
];
export default function TextSpinnerLoader() {
	const text = "LOADING . GREAT PORTFOLIO .";
	const characters = text.split("");

	const radius = 110;
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
	const [index, setIndex] = useState(0);
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	useEffect(() => {
		setDimension({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}, []);

	useEffect(() => {
		if (index === words.length - 1) return;
		setTimeout(
			() => {
				setIndex(index + 1);
			},
			index === 0 ? 1000 : 150
		);
	}, [index]);

	const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
	const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

	const curve = {
		initial: {
			d: initialPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: targetPath,
			transition: {
				duration: 0.7,
				ease: [0.76, 0, 0.24, 1],
				delay: 0.3,
			},
		},
	};

	return (
		<motion.div className="bg-[#0a0f0b] min-h-screen flex justify-center items-center z-50">
			<motion.div
				variants={slideUp}
				initial="initial"
				exit="exit"
				className="introduction min-h-screen"
			>
				{dimension.width > 0 && (
					<>
						<motion.p
							variants={opacity}
							initial="initial"
							animate="enter"
						>
							<span>{` `}</span>
							{words[index]}
						</motion.p>
						<svg>
							<motion.path
								variants={curve}
								initial="initial"
								exit="exit"
							>{` `}</motion.path>
						</svg>
					</>
				)}
			</motion.div>
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
