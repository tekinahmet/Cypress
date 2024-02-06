describe(".screenshot()", () => {
  it("taking a screenshot of an element", () => {
    cy.visit("https://webdriveruniversity.com");

    //cy.screenshot("screenshot");

    cy.get("#login-portal").invoke("removeAttr", "target").click();

    /* cy.get("#text").type("ahmet").screenshot();

         cy.get("#password").type("132456").screenshot();

         cy.get(".form").screenshot(); */

    cy.get(".form").screenshot().find("#text").type("ahmet");

    cy.get(".form").screenshot().find("#password").type("132456");

    cy.get(".form").screenshot();
  });
});
