import { storiesOf } from "@storybook/react";

import Button, { ButtonProps } from "./Button";

const solidButtonProps: ButtonProps = {
	variant: "solid",
};

const outlineButtonProps: ButtonProps = {
	variant: "outline",
};

storiesOf("Buttons", module)
	.add("Solid", () =>
		<Button {...solidButtonProps} className={"rounded-2xl"}>
			Button
		</Button>
	)
	.add("Outline", () => <Button {...outlineButtonProps}>Button2</Button>);
