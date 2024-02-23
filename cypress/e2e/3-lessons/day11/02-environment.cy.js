describe("Environment", () => {
  it("defining and using baseUrl in environment", () => {
    cy.visit("https://practicesoftwaretesting.com/#/");
  });
  
  //to use baseUrl in environment
  it("defining and using baseUrl in environment", () => {
    cy.visit("/");
  });

  //to call environment variable
  it("defining and using baseUrl in environment", () => {
    cy.visit(Cypress.env("amazon"));
  });

  //to add endpoint to baseurl
  it("defining and using baseUrl in environment", () => {
    cy.visit("/" + Cypress.env("signIn"));
  });
});
