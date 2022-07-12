import { ComponentStory } from "@storybook/react";

import HStack from "./HStack";

export default {
	title: "Layouts/HStack",
	component: HStack,
};

const Template: ComponentStory<typeof HStack> = args => (
	<HStack {...args}>
		<h1 className={"bg-red-400 h-60"}>Hello world!</h1>
		<h1 className={"bg-green-400 h-60"}>Hello world!</h1>
		<h1 className={"bg-indigo-400 h-60"}>Hello world!</h1>
	</HStack>
);

export const Default = Template.bind({});
Default.args = {
	className: "bg-purple-400 w-screen h-screen",
};
