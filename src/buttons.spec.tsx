import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./buttons";

describe("Button", () => {
	it("shows the label", () => {
		const label = "Button label";
		render(<Button label={label} onClick={() => {}} />);
		expect(screen.getByRole("button")).toHaveTextContent(label);
	});

	it("calls the click event", () => {
		const onClick = jest.fn();
		render(<Button label="" onClick={onClick} />);
		userEvent.click(screen.getByRole("button"));
		expect(onClick).toHaveBeenCalled();
	});

	it("renders a primary colourway", () => {
		render(<Button label="" onClick={() => {}} />);
		const primaryButton = screen.getByRole("button");
		expect(primaryButton).toHaveStyle("background-color: #228722");
		expect(primaryButton).toHaveStyle("color: #ffffff");
	});

	it("renders a secondary colourway", () => {
		render(<Button label="" mode="secondary" onClick={() => {}} />);
		const secondaryButton = screen.getByRole("button");
		expect(secondaryButton).toHaveStyle("background-color: #ffffff");
		expect(secondaryButton).toHaveStyle("color: #228722");
	});
});
