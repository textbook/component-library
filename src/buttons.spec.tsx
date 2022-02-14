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
});
