import { Meta, StoryObj } from "@storybook/react";

import Input, { InputProps } from "./Input";

const meta: Meta<InputProps> = {
	title: "Components/Input",
	component: Input,
	argTypes: {},
};

export default meta;

export const Primary: StoryObj<InputProps> = {
	args: {
		value: "Input",
	},
};

export const PrimaryDisabled: StoryObj<InputProps> = {
	args: {
		value: "Input",
		disabled: true,
	},
};

export const Multiline: StoryObj<InputProps> = {
	args: {
		value: "Input",
		multiline: true,
	},
};

export const MultilineDisabled: StoryObj<InputProps> = {
	args: {
		value: "Input",
		multiline: true,
		disabled: true,
	},
};

export const Primarylabel: StoryObj<InputProps> = {
	args: {
		value: "Input",
		label: "Label",
	},
};

export const PrimarylabelDisabled: StoryObj<InputProps> = {
	args: {
		value: "Input",
		label: "Label",
		disabled: true,
	},
};

export const Multilinelabel: StoryObj<InputProps> = {
	args: {
		value: "Input",
		label: "Label",
		multiline: true,
	},
};

export const MultilinelabelDisabled: StoryObj<InputProps> = {
	args: {
		value: "Input",
		label: "Label",
		disabled: true,
		multiline: true,
	},
};
