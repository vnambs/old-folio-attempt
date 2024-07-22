import { ArrowCircleUp } from "iconsax-react";
import Link from "next/link";
import React from "react";

interface CardProps {
	number: string;
	title: string;
	link: string;
	linkText: string;
	description: string;
}

const ServicesCard: React.FC<CardProps> = ({
	number,
	title,
	link,
	linkText,
	description,
}) => {
	return (
		<div className="card  backdrop-blur-[150px] bg-transparent w-full m-3 md:w-96 shadow-xl">
			<div className="card-body">
				<p className="text-sm text-gray-400">{number}</p>
				<h2 className="card-title text-lg font-bold">{title}</h2>
				<p className="text-base">{description}</p>
				<div className="flex card-actions justify-start mt-4">
					<Link href={link} className=" flex items-center">
						<ArrowCircleUp
							size="32"
							color="#6EC277"
							variant="Bulk"
						/>
						<span className="ml-2">{linkText}</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServicesCard;
