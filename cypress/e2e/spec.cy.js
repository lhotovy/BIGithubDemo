describe("Workflow spec", () => {
  it("Visits page and verifies content", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Save and see your changes instantly.").should("be.visible");
  });
});
