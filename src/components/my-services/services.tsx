import React, { useRef } from "react";
import ServiceSlider from "@/components/service-slider";
import ServicesCard from "@/components/services-card";
import ModalList from "@/components/modals-list";
import { useCursor } from "@/context/CursorContext";
import { servicesData } from "./services-data";

interface MyServicesSectionProps {
	background: string;
}

const MyServicesSection = ({ background }: MyServicesSectionProps) => {
	const container = useRef<HTMLDivElement | null>(null);
	const { setCursorText, setCursorVariant } = useCursor();

	const handleMouseEnter = () => {
		setCursorText("👋");
		setCursorVariant("contact");
	};

	const handleMouseLeave = () => {
		setCursorText("");
		setCursorVariant("default");
	};

	return (
		<section
			id="my-services"
			className="flex md:grid w-full place-items-center bg-center min-h-screen"
			style={{ backgroundImage: background }}
			ref={container}
		>
			<div className="relative grid max-w-screen">
				<ServiceSlider>
					<div className="absolute w-full mx-auto grid">
						<div
							className="relative items-center max-w-screen-sm md:max-w-full grid md:w-auto md:flex md:flex-row md:gap-10 justify-self-center md:top-9 p-4"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							{servicesData.map((service, index) => (
								<ServicesCard
									key={index}
									number={service.number}
									title={service.title}
									description={service.description}
									linkText={service.linkText}
									link={service.link}
								/>
							))}
						</div>

						<div className="relative grid ">
							<div className="place-items-center max-w-screen-sm md:max-w-full grid md:w-auto md:flex md:flex-row md:gap-4 mx-auto p-4">
								<ModalList />
							</div>
						</div>
					</div>
				</ServiceSlider>
			</div>
		</section>
	);
};

export default MyServicesSection;
