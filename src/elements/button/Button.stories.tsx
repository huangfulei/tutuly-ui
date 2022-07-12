import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "./Button";

export default {
	title: "Elements/Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
	secondary: true,
};
