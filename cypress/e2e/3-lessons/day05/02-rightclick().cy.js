describe("eylem metotlari - rightclick()", () => {
  it("rightclick()", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://demoqa.com/buttons");
    cy.get("#rightClickBtn").rightclick("left");
    cy.get("#rightClickMessage")
      .should("be.visible")
      .and("have.text", "You have done a right click");
  });
});
