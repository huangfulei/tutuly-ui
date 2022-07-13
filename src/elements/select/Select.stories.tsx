import { ComponentStory } from "@storybook/react";

import Select from "./Select";

export default {
	title: "Elements/Select",
	component: Select,
};

const Template: ComponentStory<typeof Select> = args => (
	<Select {...args}>
		<option value='1'>One</option>
		<option value='2'>Two</option>
		<option value='3'>Three</option>
	</Select>
);

export const Default = Template.bind({});
Default.args = {
	options: [
		{ value: "1", label: "One" },
		{ value: "2", label: "Two" },
		{ value: "3", label: "Three" },
	],
	onSelected: value => alert(JSON.stringify(value)),
};

export const CustomClass = Template.bind({});
CustomClass.args = {
	options: [
		{ value: "1", label: "One" },
		{ value: "2", label: "Two" },
		{ value: "3", label: "Three" },
	],
	className: "bg-gray-100 w-24",
};
