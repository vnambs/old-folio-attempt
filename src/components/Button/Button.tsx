import React from "react";
import { Color, Size } from "./Types";

const disabledClass = "bg-disabled text-disabled";

export type ButtonProps = {
	icon?: React.ReactElement;
	iconAfter?: React.ReactElement;
	children: React.ReactNode;
	variant?: "primary" | "secondary" | "tertiary";
	type: "button" | "submit" | "reset";
	onClick?: void;
	color: Color;
	size: Size;
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
	onClick,
	color,
	size,
	...rest
}: ButtonProps) => {
	const colorClasses = {
		primary: "btn-primary",
		secondary: "btn-secondary",
		success: "btn-success",
		neutral: "btn-neutral",
		default: "btn-default",
		accent: "btn-accent",
	};

	const textColors = {
		primary: " hover:bg-white hover:text-primary",
		secondary: " hover:bg-white hover:text-secondary",
		success: " hover:bg-white hover:text-success",
		neutral: " hover:bg-white hover:text-neutral",
		default: "",
		accent: "hover:bg-white hover:text-accent",
	};

	const sizeVariant = {
		lg: "btn-lg",
		md: "btn-md",
		sm: "btn-sm",
		xs: "btn-xs",
		block: "btn-block",
	};
	const ButtonClassName = `${getVariant(variant, disabled)} ${className} ${colorClasses[color]} ${sizeVariant[size]} ${textColors[color]}`;
	return (
		<button
			type={type}
			className={ButtonClassName}
			disabled={disabled}
			{...rest}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
