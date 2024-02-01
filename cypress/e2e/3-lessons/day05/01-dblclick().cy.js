describe("eylem metotlari - dblclick()", () => {
  it("dblclick", () => {
    cy.on("uncaught:exception", (err, Runnable) => {
      return false;
    });
    cy.visit("https://demoqa.com/buttons");
    cy.get("#doubleClickBtn").dblclick("bottomRight");
    cy.get("#doubleClickMessage")
      .should("be.visible")
      .and("have.text", "You have done a double click");
  });
});
