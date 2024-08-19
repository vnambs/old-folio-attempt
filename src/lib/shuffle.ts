import { Logo } from "@/components/service-slider/icon";
import { shuffleArray } from "./fisherYatesShuffle";

export const extendArray = (array: Logo[], count: number): Logo[] => {
	const extendedArray: Logo[] = [];
	for (let i = 0; i < count; i + 1) {
		const shuffled = shuffleArray(array);
		extendedArray.push(...shuffled);
	}
	return extendedArray;
};
