describe("select()", () => {
  it("select() example", () => {
    cy.visit("https://www.letskodeit.com/practice");

    //select by value
    cy.get("#carselect").select("honda").should("have.value", "honda");
    cy.wait(1000);

    //select by text
    cy.get("#carselect").select("BMW").should("be.visible");
    cy.wait(1000);

    //select by index
    cy.get("#carselect").select(1).should("exist");
    cy.wait(1000);

    //option:selected
    cy.get("#carselect option:selected").should("have.text", "Benz");
  });

  it("multiple select example", () => {
    cy.visit("https://www.letskodeit.com/practice");

    //select with text
    //cy.get("#multiple-select-example").select(["Apple", "Orange"]);

    //select by value
    //cy.get("#multiple-select-example").select(["apple", "orange"]);

    //select by index
    cy.get("#multiple-select-example").select([0, 1]);
  });
});
