import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "@/components/magnetic";
import styles from "./style.module.scss";

export type ButtonProps = {
	children: React.ReactNode;
	colors: string[];
};

const BtnTest = ({
	children,
	colors = ["#455CE9", "#FFC107", "#F8BBD0"],
	...attributes
}: ButtonProps) => {
	const circle = useRef<HTMLDivElement | null>(null);
	const circleOne = useRef<HTMLDivElement | null>(null);
	const circleTwo = useRef<HTMLDivElement | null>(null);
	// eslint-disable-next-line no-undef
	const timelineRef = useRef<GSAPTimeline | null>(null); // Use useRef for timeline

	const [backgroundColor, setBackgroundColor] = useState(colors[0]);

	const [circleOneColor, setCircleOneColor] = useState(colors[1]);
	const [circleTwoColor, setCircleTwoColor] = useState(colors[2]);

	const launchEffect = () => {
		if (!timelineRef.current) {
			setBackgroundColor(colors[0]);
			setCircleOneColor(colors[1]);
			setCircleTwoColor(colors[2]);
			// Check if timeline is initialized before creating
			timelineRef.current = gsap.timeline({ paused: true });
			timelineRef.current
				.to(
					circle.current,
					{
						top: "-25%",
						width: "150%",
						duration: 0.4,
						ease: "power3.in",
					},
					"enter"
				)
				.to(
					circle.current,
					{ top: "-150%", width: "125%", duration: 0.25 },
					"one"
				)
				.to(
					circleOne.current,
					{
						top: "-25%",
						width: "150%",
						duration: 0.4,
						ease: "power3.in",
					},
					"enterone"
				)
				.to(
					circleOne.current,
					{ top: "-150%", width: "125%", duration: 0.25 },
					"two"
				)
				.to(
					circleTwo.current,
					{
						top: "-25%",
						width: "150%",
						duration: 0.4,
						ease: "power3.in",
					},
					"entertwo"
				)
				.to(
					circleTwo.current,
					{ top: "-34%", width: "125%", duration: 0.25 },
					"exit"
				);
		}
	};

	useEffect(() => {
		timelineRef.current = gsap.timeline({ paused: true });
		launchEffect();
	}, []); // Run launchEffect on component mount

	const manageMouseEnter = () => {
		// Code to update colors...

		if (timelineRef.current) {
			timelineRef.current.tweenFromTo("enter", "exit");
			setTimeout(() => {
				if (timelineRef.current) {
					timelineRef.current.play();
				}
			}, 300);
		}
	};

	return (
		<Magnetic>
			<div
				className={`${styles.roundedButton} overflow-hidden`}
				onMouseEnter={manageMouseEnter}
				onMouseLeave={manageMouseEnter}
				{...attributes}
			>
				{children}
				<div
					ref={circle}
					style={{ backgroundColor }}
					className={styles.circle}
				>
					{" "}
				</div>
				<div
					ref={circleOne}
					style={{ backgroundColor: circleOneColor }}
					className={styles.circleone}
				>
					{" "}
				</div>
				<div
					ref={circleTwo}
					style={{ backgroundColor: circleTwoColor }}
					className={styles.circletwo}
				>
					{" "}
				</div>
			</div>
		</Magnetic>
	);
};

export default BtnTest;
