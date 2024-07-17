"use client";

import React, { useEffect } from "react";
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

const ServiceSlider: React.FC<IProps> = ({
	imgs,
	carouselId,
	classNameCarousel = "",
	classNameForImage = "",
	isAutoPlay = true,
	autoPlayMilliseconds = 5000,
}) => {
	useEffect(() => {
		if (isAutoPlay) {
			const interval = setInterval(() => {
				const carousel = document.getElementById(carouselId);
				if (carousel) {
					const { scrollWidth } = carousel;
					const currentScroll = carousel.scrollLeft;
					const carouselWidth = carousel.clientWidth;

					const isEndOfCarousel =
						currentScroll + carouselWidth >= scrollWidth;
					carousel.scrollTo({
						left: isEndOfCarousel
							? 0
							: currentScroll + carouselWidth,
						behavior: "smooth",
					});
				}
			}, autoPlayMilliseconds);

			return () => clearInterval(interval);
		}
	}, [carouselId, isAutoPlay, autoPlayMilliseconds]);

	return (
		<div
			id={carouselId}
			className={twMerge(
				"carousel carousel-center rounded-box max-w-screen space-x-4 p-4 h-40 backdrop-blur-[30px] bg-transparent",
				classNameCarousel
			)}
		>
			{imgs.map((img, index) => (
				<div key={index} className="carousel-item">
					<img
						src={img.src}
						className={twMerge("rounded-box", classNameForImage)}
						alt={img.alt || `image-${index}`}
					/>
				</div>
			))}
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
