import { Logo } from "@/components/service-slider/icon";

export const shuffleArray = (array: Logo[]): Logo[] => {
	const shuffledArray = array.slice();
	for (let i = shuffledArray.length - 1; i > 0; i - 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledArray[i], shuffledArray[j]] = [
			shuffledArray[j],
			shuffledArray[i],
		];
	}
	return shuffledArray;
};
