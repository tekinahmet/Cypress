describe("uygulama 07", () => {
  it("tool shop registration", () => {
    cy.visit("https://practicesoftwaretesting.com/#/");

    cy.get('[data-test="nav-sign-in"]').click();

    cy.readFile("cypress/fixtures/email.txt").then((email) => {
      cy.get("#email").type(email);
    });

    cy.readFile("cypress/fixtures/password.txt").then((password) => {
      cy.get("#password").type(password);
    });

    cy.get('[value="Login"]').click();

    cy.get('[data-test="nav-user-menu"]').should('be.visible');
  });
});
