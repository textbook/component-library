import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";

import { Button, ButtonProps } from "./buttons";
import { cyfTheme } from "./theme";

describe("Button", () => {
	it("shows the label", () => {
		const label = "Button label";
		renderThemed({ label });
		expect(screen.getByRole("button")).toHaveTextContent(label);
	});

	it("calls the click event", () => {
		const onClick = jest.fn();
		renderThemed({ onClick });
		userEvent.click(screen.getByRole("button"));
		expect(onClick).toHaveBeenCalled();
	});

	it("renders a primary colourway", () => {
		renderThemed();
		const primaryButton = screen.getByRole("button");
		expect(primaryButton).toHaveStyle("background-color: #228722");
		expect(primaryButton).toHaveStyle("color: #ffffff");
	});

	it("renders a secondary colourway", () => {
		renderThemed({ mode: "secondary" });
		const secondaryButton = screen.getByRole("button");
		expect(secondaryButton).toHaveStyle("background-color: #ffffff");
		expect(secondaryButton).toHaveStyle("color: #228722");
	});

	const renderThemed = (overrides?: Partial<ButtonProps>) =>
		render(
			<ThemeProvider theme={cyfTheme}>
				<Button label="" onClick={() => {}} {...overrides} />
			</ThemeProvider>,
		);
});
