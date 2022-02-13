it("can render a simple button", () => {
	cy.visit("/");
	cy.injectAxe();
	cy.checkA11y();
	cy.findByRole("button", { name: "Click me!" }).click();
	cy.findByText("Hello, world!").should("exist");
	cy.checkA11y();
});
