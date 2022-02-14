import { withThemes } from "@react-theming/storybook-addon";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { cyfTheme } from "../src/theme";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

addDecorator(withThemes(ThemeProvider, [cyfTheme]));
