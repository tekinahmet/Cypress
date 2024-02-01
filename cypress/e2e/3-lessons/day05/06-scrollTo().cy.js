describe("scrollTo()", () => {
  it("scrollTo()", () => {
    cy.visit("https://www.webdriveruniversity.com");

    //koordinat ile scroll yapmak
    cy.scrollTo(200, 2000, { duration: 8000 });

    //position ile scroll yapmak
    cy.scrollTo("bottom", { duration: 5000 });
    cy.scrollTo("top", { duration: 3000 });
  });
});
