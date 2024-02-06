describe("Navigasyon", () => {
  it('go("back"), go("forward")', () => {
    cy.visit("https://webdriveruniversity.com");

    cy.url().should("include", "https://webdriveruniversity.com");

    cy.get("#contact-us").invoke("removeAttr", "target").click();

    cy.url().should("contain", "Contact-Us");

    cy.go("back");

    cy.url().should("include", "https://webdriveruniversity.com");

    cy.go("forward");

    cy.url().should("exist", "Contact-Us");

    cy.go(-1); //back

    cy.url().should("include", "https://webdriveruniversity.com");

    cy.go(1); //forward

    cy.url().should("include", "https://webdriveruniversity.com");

    cy.reload();
    
    cy.reload(true);
  });
});
