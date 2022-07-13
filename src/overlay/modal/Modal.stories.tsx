import { ComponentStory } from "@storybook/react";

import Button from "../../elements/button/Button";

import Modal from "./Modal";

export default {
	title: "Overlay/Modal",
	component: Modal,
};

const Template: ComponentStory<typeof Modal> = args => (
	<Modal
		{...args}
		open={true}
		setOpen={open => {
			alert("is open: " + open);
		}}>
		<div>
			<Button>hello</Button>
			<Button secondary>hello</Button>
		</div>
	</Modal>
);

export const Default = Template.bind({});
Default.args = {};

export const closeOnClickOverlay = Template.bind({});
closeOnClickOverlay.args = {
	closeOnOverlayClick: true,
};

export const customStyleModal = Template.bind({});
customStyleModal.args = {
	className: "bg-red-500 md:max-w-xl h-72",
	closeOnOverlayClick: true,
};
