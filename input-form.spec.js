describe("Weather App", () => {
  it("focuses input on load", () => {
    cy.visit("http://localhost:3000/");

    cy.focused().should("have.class", "location-search-input");
  });
  it.only("saved", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".addToSaved").click();
    cy.get("#Menu").click();
    cy.get(".City").click({ force: true });
  });

  it.only("sets input", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".location-search-input")
      .type("Vilnius,Lithuania")
      .should("have.value", "Vilnius,Lithuania")
      .get(".autocomplete-dropdown-container")
      .get("div span");
  });
});
