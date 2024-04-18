import React from "react";

const disabledClass = "bg-disabled text-disabled";

export type ButtonProps = {
	children: React.ReactNode;
	variant?: "primary" | "secondary" | "tertiary";
	type: "button" | "submit" | "reset";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(
	variant: ButtonProps["variant"],
	disabled: ButtonProps["disabled"]
) {
	switch (variant) {
		case "primary":
			return disabled ? disabledClass : "bg-primary text-white";
		case "secondary":
			return disabled ? disabledClass : "bg-quaternary text-primary";
		case "tertiary":
		default:
			return disabled ? disabledClass : "text-primary";
	}
}

const Button = ({
	variant = "primary",
	children,
	className,
	disabled,
	type = "button",
	...rest
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={`rounded-md px-6 py-2 ${getVariant(variant, disabled)} ${className}`}
			disabled={disabled}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
