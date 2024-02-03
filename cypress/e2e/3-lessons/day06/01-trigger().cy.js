describe("trigger()", () => {
  //js ile yazılan butona tıklamak için kullanılır
  it("trigger()", () => {
    cy.visit("https://www.letskodeit.com/practice");

    cy.get("#mousehover").trigger("mouseover");
    cy.wait(1000);
    cy.get('[href="#top"]').click({ force: true });
  });

  it("trigger() - amazon ", () => {
    cy.visit("https://www.amazon.com/");
    //cy.get("#nav-link-accountList").trigger("mouseover");
    cy.get("#icp-nav-flyout").trigger("mouseover");
  });
});
