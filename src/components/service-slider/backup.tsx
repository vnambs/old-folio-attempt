"use client";

import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type Iimg = {
	src: string;
	alt?: string;
};

type IProps = {
	imgs: Iimg[];
	carouselId: string;
	classNameCarousel?: string;
	classNameForImage?: string;
	isAutoPlay?: boolean;
	autoPlayMilliseconds?: number;
};

const goToOtherImage = (href: string, carouselId: string): void => {
	const carousel = document.getElementById(carouselId);
	if (carousel) {
		const target = document.querySelector<HTMLDivElement>(href);
		if (target) {
			const left = target.offsetLeft;
			carousel.scrollTo({ left, behavior: "smooth" });
		}
	}
};

const ServiceSlider: React.FC<IProps> = ({
	imgs,
	carouselId,
	classNameCarousel = "",
	classNameForImage = "",
	isAutoPlay = true,
	autoPlayMilliseconds = 5000,
}) => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const handleClickBtn = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		i: number
	): void => {
		event.preventDefault();
		const btn = event.currentTarget;
		const href = btn.getAttribute("href");
		if (href) {
			goToOtherImage(href, carouselId);
			setActiveIndex(i);
		}
	};

	useEffect(() => {
		if (isAutoPlay) {
			const intervalId = setInterval(() => {
				const newActiveIndex = (activeIndex + 1) % imgs.length;
				goToOtherImage(
					`#ServiceSlider_img_${newActiveIndex}`,
					carouselId
				);
				setActiveIndex(newActiveIndex);
			}, autoPlayMilliseconds);
			return () => clearInterval(intervalId);
		}
		return undefined;
	}, [
		activeIndex,
		autoPlayMilliseconds,
		carouselId,
		imgs.length,
		isAutoPlay,
	]);

	return (
		<div className="relative">
			<div
				id={carouselId}
				className={twMerge(
					"carousel flex overflow-x-scroll no-scrollbar", // Ajout de classes pour le défilement horizontal
					classNameCarousel
				)}
			>
				{imgs.map((img: Iimg, i: number) => (
					<div
						key={`ServiceSlider_img_${i}`}
						id={`ServiceSlider_img_${i}`}
						className={twMerge(
							"carousel-item flex-shrink-0 w-full bg-center bg-cover bg-no-repeat",
							classNameForImage
						)}
					>
						<img
							src={img.src}
							alt={img.alt || "services"}
							className="w-full"
						/>
					</div>
				))}
			</div>
			<div className="flex justify-center w-full py-2 gap-2 absolute bottom-3">
				{imgs.map((img: Iimg, i: number) => (
					<a
						onClick={e => handleClickBtn(e, i)}
						key={`ServiceSlider_img_point_${i}`}
						href={`#ServiceSlider_img_${i}`}
						className={`btn btn-xs btn-circle ${activeIndex !== i ? "opacity-30" : ""}`}
					>{` `}</a>
				))}
			</div>
		</div>
	);
};

ServiceSlider.defaultProps = {
	classNameCarousel: "",
	classNameForImage: "",
	isAutoPlay: true,
	autoPlayMilliseconds: 5000,
};

export default ServiceSlider;
