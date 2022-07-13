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

export const NumberInput = Template.bind({});
NumberInput.args = {
	id: "number-input",
	label: "Number Input",
	type: "number",
	step: "0.03",
};
