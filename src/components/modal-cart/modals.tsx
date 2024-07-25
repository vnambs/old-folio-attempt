import Image from "next/image";
import { CloseCircle } from "iconsax-react";
import React, { useEffect, useState } from "react";

interface ModalProps {
	id: string;
	title: string;
	content: string;
	imageUrl: string;
	imageAlt: string;
	onClose: () => void;
}
const Modals = ({
	id,
	title,
	content,
	imageUrl,
	imageAlt,
	onClose,
}: ModalProps) => {
	const fallbackSrc = "/placeholder.jpg";
	const [imgSrc, setImgSrc] = useState(imageUrl);

	useEffect(() => {
		setImgSrc(imageUrl);
	}, [imageUrl]);

	return (
		<>
			<div className="max-w-[60%] min-w-[60%] modal-box bg-transparent">
				<div
					className="card card-compact shadow-xl h-96 relative overflow-hidden"
					id={id}
				>
					<figure>
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
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button
							className="btn-circle btn-md items-center flex btn-ghost absolute right-2 top-2"
							onClick={onClose}
						>
							<CloseCircle size="32" color="#FFF" />{" "}
						</button>
					</form>
					<div className="relative z-10 card-body  bg-gray-900 text-white p-6">
						<h2 className="card-title">{title}</h2>
						<p className="py-4">{content}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modals;
