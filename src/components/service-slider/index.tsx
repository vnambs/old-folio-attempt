"use client";

import React, { useEffect, useRef } from "react";
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
	autoPlayInterval?: number;
};

const ServiceSlider: React.FC<IProps> = ({
	imgs,
	carouselId,
	classNameCarousel = "",
	classNameForImage = "",
	isAutoPlay = true,
	autoPlayInterval = 100,
}) => {
	const carouselRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const carousel = carouselRef.current;
		if (carousel) {
			const totalImages = imgs.length;
			const singleImageWidth = carousel.clientWidth / totalImages;

			if (isAutoPlay) {
				const interval = setInterval(() => {
					const maxScrollLeft =
						carousel.scrollWidth - carousel.clientWidth;
					if (
						carousel.scrollLeft >=
						maxScrollLeft - singleImageWidth
					) {
						carousel.scrollLeft = 0;
					} else {
						carousel.scrollLeft += singleImageWidth;
					}
				}, autoPlayInterval);

				return () => clearInterval(interval);
			}
		}
	}, [imgs.length, isAutoPlay, autoPlayInterval]);
	return (
		<div className="flex max-w-screen-lg">
			<div
				id={carouselId}
				ref={carouselRef}
				className={twMerge(
					"carousel carousel-center rounded-box w-full space-x-4 p-4 h-40 backdrop-blur-[30px] bg-transparent mask-gradient",
					classNameCarousel
				)}
			>
				{imgs.map((img, index) => (
					<div key={index} className="carousel-item">
						<img
							src={img.src}
							className={twMerge(
								"rounded-box",
								classNameForImage
							)}
							alt={img.alt || `image-${index}`}
						/>
					</div>
				))}
				{imgs.map((img, index) => (
					<div key={`clone-${index}`} className="carousel-item">
						<img
							src={img.src}
							className={twMerge(
								"rounded-box",
								classNameForImage
							)}
							alt={img.alt || `image-clone-${index}`}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

ServiceSlider.defaultProps = {
	classNameCarousel: "",
	classNameForImage: "",
	isAutoPlay: true,
	autoPlayInterval: 3000,
};

export default ServiceSlider;
