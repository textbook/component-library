import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from ".";

export default {
	title: "Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "Button",
	onClick: undefined,
};
