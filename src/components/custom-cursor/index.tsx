"use client";

import React, { useState, MutableRefObject, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import useMouse from "@react-hook/mouse-position";
import styles from "./cursor.module.css";

interface CustomCursorProps {
	parentRef: MutableRefObject<HTMLElement | null>;
	stickyRef: MutableRefObject<HTMLElement | null>;
	cursorVariant: string;

	cursorText: string;
}

const CustomCursor = ({
	parentRef,
	cursorVariant,
	cursorText,
	stickyRef,
}: CustomCursorProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const cursorSize = isHovered ? 60 : 15;

	const mouse = useMouse(parentRef, {
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
	const mouseX = useMotionValue(-100);
	const mouseY = useMotionValue(-100);

	const variants = {
		default: {
			opacity: 1,
			width: cursorSize,
			height: cursorSize,
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
			width: cursorSize + 70,
			height: cursorSize + 70,
			fontSize: "18px",
			x: mouseXPosition - 32,
			y: mouseYPosition - 32,
		},
		contact: {
			opacity: 1,
			backgroundColor: "#FFBCBC",
			color: "#000",
			width: cursorSize,
			height: cursorSize,
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

	useEffect(() => {
		const stickyElement = stickyRef.current;

		if (stickyElement) {
			const handleMouseEnter = () => setIsHovered(true);
			const handleMouseLeave = () => setIsHovered(false);
			console.log(isHovered);

			stickyElement.addEventListener("mouseenter", handleMouseEnter);
			stickyElement.addEventListener("mouseleave", handleMouseLeave);

			return () => {
				stickyElement.removeEventListener(
					"mouseenter",
					handleMouseEnter
				);
				stickyElement.removeEventListener(
					"mouseleave",
					handleMouseLeave
				);
			};
		}
	}, [stickyRef]);

	useEffect(() => {
		if (mouse.clientX !== null && mouse.clientY !== null) {
			if (isHovered) {
				console.log("ato");
				const { left, top, height, width } =
					stickyRef.current?.getBoundingClientRect() || {};
				const center = {
					x: (left ?? 0) + (width ?? 0) / 2,
					y: (top ?? 0) + (height ?? 0) / 2,
				};
				const distance = {
					x: mouse.clientX - center.x,
					y: mouse.clientY - center.y,
				};
				mouseX.set(center.x - cursorSize / 2 + distance.x * 0.1);
				mouseY.set(center.y - cursorSize / 2 + distance.y * 0.1);
			} else {
				mouseX.set(mouse.clientX - cursorSize / 2);
				mouseY.set(mouse.clientY - cursorSize / 2);
			}
		}
	}, [
		mouse.clientX,
		mouse.clientY,
		isHovered,
		stickyRef,
		cursorSize,
		mouseX,
		mouseY,
	]);

	return (
		<motion.div
			variants={variants}
			className={styles.cursorCircle}
			animate={cursorVariant}
			transition={spring}
		>
			<span className="cursorText">{cursorText}</span>
		</motion.div>
	);
};

export default CustomCursor;
