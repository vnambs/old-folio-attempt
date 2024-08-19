export const rangeNumber = (value: number, minVal = 0, maxVal = 1) => {
	return minVal + Math.floor((value ?? Math.random()) * (maxVal - minVal));
};
