describe("Custom Command", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });
  it("Magento-Valid Login", () => {
    cy.contains("Sign In").click();
    cy.get("#email").type("aedyn.kewon@fixedfor.com");
    cy.get("#pass").type("*9kJceG5*TSWXhb");
    cy.get("#send2").click();
  });

  it("Magento-Invalid Login with invalid username", () => {
    cy.contains("Sign In").click();
    cy.get("#email").type("aedyn.kewon@fixedfor");
    cy.get("#pass").type("*9kJceG5*TSWXhb");
    cy.get("#send2").click();
  });

  it("Magento-Invalid Login with invalid password", () => {
    cy.contains("Sign In").click();
    cy.get("#email").type("aedyn.kewon@fixedfor.com");
    cy.get("#pass").type("*9kJceG5*TSW");
    cy.get("#send2").click();
  });
  it("Magento-Invalid Login with invalid data", () => {
    cy.contains("Sign In").click();
    cy.get("#email").type("aedyn.kewon@fixedfor");
    cy.get("#pass").type("*9kJceG5*TSW");
    cy.get("#send2").click();
  });
});
