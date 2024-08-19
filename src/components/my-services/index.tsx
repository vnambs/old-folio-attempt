import React from "react";
import Link from "next/link";
import { DirectDown } from "iconsax-react";
import { acidGroteskFonts } from "@/fonts";
import Button from "../Button/Button";

const MyServices = () => {
	return (
		<div className="flex justify-center items-center w-auto">
			<Button
				size="lg"
				color="default"
				type="button"
				className={` ${acidGroteskFonts.className} flex items-center bg-transparent border border-white cursor-pointer uppercase p-4 text-md rounded-[3em] background-blur-[30px]`}
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
			{/* <BtnTest colors={["#455CE9", "#FFC107", "#F8BBD0"]}>
				<p>Get in touch</p>
			</BtnTest> */}
		</div>
	);
};

export default MyServices;
