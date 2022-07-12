import { ComponentStory } from "@storybook/react";

import Container from "./Container";

export default {
	title: "Layouts/Container",
	component: Container,
};

const Template: ComponentStory<typeof Container> = args => (
	<Container {...args}>
		<h1 className={"bg-indigo-400 w-screen h-screen"}>Hello world!</h1>
	</Container>
);

export const Default = Template.bind({});
