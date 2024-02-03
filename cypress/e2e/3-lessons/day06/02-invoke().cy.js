describe("invoke()", () => {
  it("invoke()", () => {
    cy.visit("https://www.letskodeit.com/practice");
    cy.get(".mouse-hover-content").scrollIntoView();
    cy.get(".mouse-hover-content").invoke("show");
    cy.wait(1000);
    cy.get('[href="#top"]').click();
  });
  it.only("invoke() - ebay", () => {
    cy.visit("https://www.ebay.com/");
    //   cy.get('#gh-eb-My').trigger('mouseover').click({force:true});
    cy.get("#gh-eb-My-o").invoke("show");
    cy.contains("Messages").click();
  });
});
