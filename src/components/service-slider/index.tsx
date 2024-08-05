import React, { useMemo } from "react";
import { Logo, LogoList } from "./icon";

const shuffleArray = (array: Logo[]): Logo[] => {
	const shuffledArray = array.slice(); // Copie de l'original
	for (let i = shuffledArray.length - 1; i > 0; i - 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledArray[i], shuffledArray[j]] = [
			shuffledArray[j],
			shuffledArray[i],
		];
	}
	return shuffledArray;
};

const extendArray = (array: Logo[], count: number): Logo[] => {
	const extendedArray = [];
	for (let i = 0; i < count; i + 1) {
		extendedArray.push(...array);
	}
	return extendedArray;
};

interface ServicesBackgroundProps {
	children: React.ReactNode;
}

export default function Index({ children }: ServicesBackgroundProps) {
	const shuffledLogos = useMemo(() => shuffleArray(LogoList), []);
	const logoSize = 97; // Taille d'un logo (en pixels)
	const screenWidth = window.innerWidth; // Largeur de l'écran
	const screenHeight = window.innerHeight; // Hauteur de l'écran
	const logosPerRow = Math.ceil(screenWidth / logoSize);
	const rowsNeeded = Math.ceil(screenHeight / logoSize);
	const totalLogosNeeded = logosPerRow * rowsNeeded;

	const extendedLogos = useMemo(
		() =>
			extendArray(
				shuffledLogos,
				Math.ceil(totalLogosNeeded / LogoList.length)
			),
		[shuffledLogos, totalLogosNeeded]
	);

	return (
		<>
			<div className="blur-sm mask-gradient">
				<div className="relative top-0 bottom-0 flex flex-wrap justify-around items-center overflow-hidden content-stretch">
					{extendedLogos
						.slice(0, totalLogosNeeded)
						.map((logo, index) => (
							<div
								key={index}
								className="flex items-center justify-center w-[97px] h-[97px]"
							>
								<img src={logo.src} alt={logo.alt} />
							</div>
						))}
				</div>
			</div>

			{children}
		</>
	);
}
