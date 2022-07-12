import { ComponentStory } from "@storybook/react";

import Center from "./Center";

export default {
	title: "Layouts/Center",
	component: Center,
};

const Template: ComponentStory<typeof Center> = args => (
	<Center {...args}>
		<h1 className={"bg-red-400 w-60"}>Hello world!</h1>
		<h1 className={"bg-green-400 w-60"}>Hello world!</h1>
		<h1 className={"bg-indigo-400 w-60"}>Hello world!</h1>
	</Center>
);

export const Default = Template.bind({});
Default.args = {
	className: "bg-orange-100 w-screen h-screen",
};
