import { Meta, StoryObj } from "@storybook/react";
import LinkStyled, { StyledProps } from "./LinkStyled";

const meta: Meta<StyledProps> = {
	title: "Components/LinkStyled",
	component: LinkStyled,
	argTypes: {},
};

export default meta;

export const LinkVercelStyled: StoryObj<StyledProps> = {
	args: {
		href: "https://example.com",
		title: "Example Title",
		description: "Example Description",
	},
};
