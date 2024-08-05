import React from "react";
import ModalList from "@/components/modals-list";

interface MyWorkSectionProps {
	background: string;
}

const MyWorkSection = ({ background }: MyWorkSectionProps) => {
	return (
		<section
			data-scroll-section
			id="my-work"
			className="flex md:grid w-full place-items-center bg-center min-h-screen"
			style={{ backgroundImage: background }}
		>
			<div className="relative grid top-16">
				<div className="place-items-center max-w-screen-sm md:max-w-full grid md:w-auto md:flex md:flex-row md:gap-4 mx-auto p-4">
					<ModalList />
				</div>
			</div>
		</section>
	);
};

export default MyWorkSection;
