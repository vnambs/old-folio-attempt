import React from "react";
import Link from "next/link";
import { DirectDown } from "iconsax-react";
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
					<DirectDown
						color="#6EC277"
						className="mr-4"
						variant="Bulk"
					/>
				}
			>
				<Link href="#my-services"> My Services</Link>
			</Button>
		</div>
	);
};

export default MyServices;
