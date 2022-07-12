import { ComponentStory } from "@storybook/react";

import Input from "./Input";

export default {
	title: "Elements/Input",
	component: Input,
};

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: "input",
	label: "Input",
	type: "text",
};
