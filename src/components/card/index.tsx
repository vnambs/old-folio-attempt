import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CardProps {
	id: string;
	imageUrl: string;
	imageAlt: string;
	title: string;
	description: string;
}

const Card = ({ id, imageUrl, imageAlt, title, description }: CardProps) => {
	const fallbackSrc = "/placeholder.jpg";
	const [imgSrc, setImgSrc] = useState(imageUrl);

	useEffect(() => {
		setImgSrc(imageUrl);
	}, [imageUrl]);
	return (
		<div
			className="card bg-base-100 shadow-xl h-96 relative overflow-hidden"
			id={id}
		>
			<figure className="absolute inset-0 h-full w-full">
				<Image
					src={imgSrc}
					alt={imageAlt}
					onLoad={e => {
						const target = e.target as HTMLImageElement;
						if (target.naturalWidth === 0) {
							// Broken image
							setImgSrc(fallbackSrc);
						}
					}}
					onError={() => {
						setImgSrc(fallbackSrc);
					}}
					fill
					className="!relative object-cover"
				/>
			</figure>
			<div className="relative z-10 card-body bg-opacity-50 bg-black text-white p-6">
				<h2 className="card-title">{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Card;
