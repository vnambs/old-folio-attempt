import React, { createContext, useContext, useState } from "react";

interface CursorContextProps {
	cursorText: string;
	setCursorText: React.Dispatch<React.SetStateAction<string>>;
	cursorVariant: string;
	setCursorVariant: React.Dispatch<React.SetStateAction<string>>;
}

const CursorContext = createContext<CursorContextProps | undefined>(undefined);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [cursorText, setCursorText] = useState<string>("");
	const [cursorVariant, setCursorVariant] = useState<string>("default");

	return (
		<CursorContext.Provider
			value={{
				cursorText,
				setCursorText,
				cursorVariant,
				setCursorVariant,
			}}
		>
			{children}
		</CursorContext.Provider>
	);
};

export const useCursor = () => {
	const context = useContext(CursorContext);
	if (!context) {
		throw new Error("useCursor must be used within a CursorProvider");
	}
	return context;
};
