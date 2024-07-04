import React from "react";
import { ArrowCircleDown2 } from "iconsax-react";
import Button from "../Button/Button";

const MyServices = () => {
	return (
		<div className="flex justify-center items-center w-auto">
			<Button
				size="lg"
				color="default"
				type="button"
				className="flex items-center bg-transparent border-none cursor-pointer p-0 w-44 text-lg"
				icon={
					<ArrowCircleDown2
						size="32"
						color="#629C6A"
						className="mr-4"
					/>
				}
			>
				My Services
			</Button>
		</div>
	);
};

export default MyServices;
