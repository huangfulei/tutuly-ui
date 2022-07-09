import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button, { ButtonProps } from "./Button";

export default {
	title: "Elements/Button",
	component: Button,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "fullscreen",
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>Button</Button>;

const solidButtonProps: ButtonProps = {
	variant: "solid",
	className: "bg-white dark:bg-slate-800",
};
export const Solid = Template.bind({});
Solid.args = solidButtonProps;

const outlineButtonProps: ButtonProps = {
	variant: "outline",
	className: "bg-white dark:bg-slate-800",
};
export const Outline = Template.bind({});
Outline.args = outlineButtonProps;

// storiesOf("Buttons", module)
// 	.add("Solid", () => (
// 		<Button {...solidButtonProps} className={"rounded-2xl bg-white dark:bg-slate-800"}>
// 			Button
// 		</Button>
// 	))
// 	.add("Outline", () => (
// 		<Button {...outlineButtonProps} className={"bg-white dark:bg-slate-800"}>
// 			Button2
// 		</Button>
// 	));
