import { ComponentStory } from "@storybook/react";

import VStack from "./VStack";

export default {
	title: "Layouts/VStack",
	component: VStack,
};

const Template: ComponentStory<typeof VStack> = args => (
	<VStack {...args}>
		<h1 className={"bg-red-400 w-60"}>Hello world!</h1>
		<h1 className={"bg-green-400 w-60"}>Hello world!</h1>
		<h1 className={"bg-indigo-400 w-60"}>Hello world!</h1>
	</VStack>
);
export const Default = Template.bind({});
Default.args = {
	className: "bg-purple-400 w-screen h-screen",
};
