describe("Custom Command", () => {
  it("magento-search bar test", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get("#search").type("word{enter}");
    cy.get(".base").should("contain", "word");
  });

    it.only("magento-search bar test", () => {
      cy.wordSearch("shoes");
    });
});
