import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
	title: "Components/Button",
	component: Button,
	argTypes: {
		children: {
			type: "string",
		},
		disabled: {
			type: "boolean",
		},
		className: {
			type: "string",
		},
		type: {
			type: "string",
		},
	},
};

const violet = "theme-violet";

export default meta;

export const Primary: StoryObj<ButtonProps> = {
	args: {
		children: "Button",
	},
};
export const Disabled: StoryObj<ButtonProps> = {
	args: {
		children: "Button",
		disabled: true,
	},
};
export const Secondary: StoryObj<ButtonProps> = {
	args: {
		children: "Button",
		variant: "secondary",
	},
};
export const SecondaryDisabled: StoryObj<ButtonProps> = {
	args: {
		children: "Button",
		variant: "secondary",
		disabled: true,
	},
};

export const Tertiary: StoryObj<ButtonProps> = {
	args: {
		children: "Button",
		variant: "tertiary",
	},
};
export const TertiaryDisabled: StoryObj<ButtonProps> = {
	args: {
		children: "Button",
		variant: "tertiary",
		disabled: true,
	},
};

export const Violet: StoryObj<ButtonProps> = {
	args: {
		children: "Button",
		className: violet,
	},
};

export const VioletSecondary: StoryObj<ButtonProps> = {
	args: {
		children: "Button",
		variant: "secondary",
		className: violet,
	},
};
export const VioletTertiary: StoryObj<ButtonProps> = {
	args: {
		children: "Button",
		className: violet,
		variant: "tertiary",
	},
};
