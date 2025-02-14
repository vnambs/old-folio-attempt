import { useState, useEffect } from "react";

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const updateMousePosition = (e: { clientX: number; clientY: number }) => {
		setMousePosition({ x: e.clientX ?? 0, y: e.clientY ?? 0 });
	};

	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition);

		return () =>
			window.removeEventListener("mousemove", updateMousePosition);
	}, []);

	return mousePosition;
};

export default useMousePosition;
