describe("Workflow spec", () => {
  it("Visits page and verifies content", () => {
    cy.visit("http://localhost:3000");
    cy.lighthouse({
      performance: 85,
      accessibility: 100,
      "best-practices": 85,
      seo: 85,
      pwa: 100,
    });
    cy.contains("Save and see your changes instantly.").should("be.visible");
  });
});
