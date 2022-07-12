import { ComponentStory } from "@storybook/react";

import Button from "../button/Button";

import Checkbox from "./Checkbox";

export default {
	title: "Elements/Checkbox",
	component: Checkbox,
};

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />;
export const Default = Template.bind({});
Default.args = {
	children: (
		<div>
			<Button>hello</Button>
			<Button secondary>hello</Button>
		</div>
	),
};
