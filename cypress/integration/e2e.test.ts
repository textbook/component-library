it("can render a simple button", () => {
	cy.visit("/");
	cy.findByRole("button", { name: "Click me!" }).click();
	cy.findByText("Hello, world!").should("exist");
});
