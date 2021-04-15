describe("Weather App", () => {
  it("focuses input on load", () => {
    cy.visit("http://localhost:3000/");

    cy.focused().should("have.class", "location-search-input");
  });
  it.only("selects week", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#Week").click();
    cy.get("#Today").click();
  });

  it.only("change degrees", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#TempBtnF").click();
    cy.get("#TempBtnC").click();
  });
});
