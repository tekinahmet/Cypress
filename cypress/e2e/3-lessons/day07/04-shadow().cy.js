describe("shadow()", () => {
  it("shadow()", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit(
      "https://www.mercedes-benz.co.uk/?group=all&subgroup=see-all&view=BODYTYPE"
    );

    //cy.contains("Agree to all").click();

    cy.get('[settings-id="fph8XBqir"]')
      .shadow()
      .find('[data-test="handle-accept-all-button"]')
      .contains("Agree to all")
      .click();
  });
});
