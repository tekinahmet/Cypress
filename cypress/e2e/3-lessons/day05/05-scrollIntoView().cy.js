describe("scrollIntoView()", () => {
  it("scrollIntoView()", () => {
    cy.visit("https://www.webdriveruniversity.com");

    //faster
    cy.get("#actions").scrollIntoView({ duration: 1000 }).should("be.visible");

    //slower
    cy.get("#contact-us")
      .scrollIntoView({ duration: 5000 })
      .should("be.visible");

  });
});
