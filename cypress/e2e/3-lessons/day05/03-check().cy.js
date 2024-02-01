describe("check()", () => {
  it("CHECKBOX", () => {
    cy.visit("https://www.letskodeit.com/practice");

    //CHECKBOX

    //Check
    cy.get('[type="checkbox"][name="cars"]').check().should("be.checked");

    //Uncheck
    cy.get('[type="checkbox"][name="cars"]').uncheck().should("not.be.checked");

    //first
    cy.get('[type="checkbox"][name="cars"]')
      .first()
      .check()
      .should("be.checked");

    //check('value')
    cy.get('[type="checkbox"][name="cars"]').check("benz");

    //uncheck('value')
    cy.get('[type="checkbox"][name="cars"]').uncheck("benz");
    cy.get('[type="checkbox"][name="cars"]').uncheck("bmw");

    //check(['value1','value2'])
    cy.get('[type="checkbox"][name="cars"]').check(["benz", "bmw", "honda"]);

    //uncheck(['value1','value2'])
    cy.get('[type="checkbox"][name="cars"]').uncheck(["benz", "bmw", "honda"]);
  });

  it.only("RADIO BUTTONS", () => {
    cy.visit("https://www.letskodeit.com/practice");

    //RADIO BUTTONS
    //Check
    cy.get('[type="radio"][name="cars"]').check().should("be.checked");

    //uncheck('value')
    cy.get('[type="radio"][name="cars"]').check("benz").should('be.checked');
  });
});
