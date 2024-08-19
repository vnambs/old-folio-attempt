import React, { createContext, useEffect, useState, ReactNode } from "react";

interface SmoothScrollOptions {
	lerp?: number;
	multiplier?: number;
	smooth?: boolean;
}

interface SmoothScrollContextType {
	scroll: any; // Adaptez le type selon les besoins basés sur LocomotiveScroll
}

interface SmoothScrollProviderProps {
	children: ReactNode;
	options?: SmoothScrollOptions; //eslint-disable-line react/require-default-props
}

export const SmoothScrollContext = createContext<SmoothScrollContextType>({
	scroll: null,
});

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({
	children,
	options,
}) => {
	const [scroll, setScroll] = useState<any>(null); // Adaptez le type selon les besoins basés sur LocomotiveScroll

	useEffect(() => {
		if (!scroll) {
			(async () => {
				try {
					const LocomotiveScroll = (await import("locomotive-scroll"))
						.default;

					setScroll(
						new LocomotiveScroll({
							el: document.querySelector(
								"[data-scroll-container]"
							) as HTMLElement | undefined,
							...options,
						})
					);
				} catch (error) {
					console.error(`[SmoothScrollProvider]: ${error}`);
				}
			})();
		}

		return () => {
			scroll && scroll.destroy(); //eslint-disable-line no-unused-expressions
		};
	}, [scroll, options]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<SmoothScrollContext.Provider value={{ scroll }}>
			{children}
		</SmoothScrollContext.Provider>
	);
};

SmoothScrollContext.displayName = "SmoothScrollContext";
SmoothScrollProvider.displayName = "SmoothScrollProvider";
