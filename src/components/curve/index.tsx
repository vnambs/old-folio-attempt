"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { text, translate } from "./anim";

const anim = (variants: Variants) => {
	return {
		variants,
		initial: "initial",
		animate: "enter",
		exit: "exit",
	};
};

type CurveProps = {
	children: React.ReactNode;
	backgroundColor: string;
};

type Dimensions = {
	width: number | null;
	height: number | null;
};

type SVGProps = {
	height: number;
	width: number;
	isAnimating: boolean;
};

const SVG = ({ height, width, isAnimating }: SVGProps) => {
	const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

	const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

	const pathVariants: Variants = {
		initial: { d: initialPath },
		enter: {
			d: targetPath,
			transition: { duration: 1, delay: 0.5, ease: [0.42, 0, 0.58, 1] },
		},
		exit: {
			d: initialPath,
			transition: { duration: 1, ease: [0.42, 0, 0.58, 1] },
		},
	};

	return (
		<motion.svg
			{...anim(translate)}
			animate={isAnimating ? "enter" : "initial"}
		>
			<motion.path variants={pathVariants} />
		</motion.svg>
	);
};

export default function Curve({ children, backgroundColor }: CurveProps) {
	const [dimensions, setDimensions] = useState<Dimensions>({
		width: null,
		height: null,
	});
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		function resize() {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		resize();
		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	const triggerAnimation = () => {
		setIsAnimating(true);
	};

	return (
		<div className="page curve" style={{ backgroundColor }}>
			<div
				style={{ opacity: dimensions.width == null ? 1 : 0 }}
				className="background"
			/>
			<motion.p
				className="route"
				{...anim(text)}
				animate={isAnimating ? "enter" : "initial"}
			>
				Animation
			</motion.p>
			{dimensions.width != null && dimensions.height != null && (
				<SVG
					height={dimensions.height}
					width={dimensions.width}
					isAnimating={isAnimating}
				/>
			)}
			<button onClick={triggerAnimation}>Trigger Animation</button>
			{children}
		</div>
	);
}
