const { faker } = require("@faker-js/faker");

let username = faker.person.firstName();
let lastname = faker.person.lastName();
let email = faker.internet.email();
let password = faker.internet.password();

describe("faker", () => {
  it("faker", () => {
    cy.visit("https://www.kitapyurdu.com/index.php?route=account/register");

    cy.get("#register-form").within(() => {
      cy.get("#register-name").type(username);
      cy.get("#register-lastname").type(lastname);
      cy.get("#register-email").type(email);
      cy.get("#register-password").type(password);
      cy.get("#register-password-confirm").type(password);
    });
  });

  it.only("email validation message", () => {
    cy.visit("https://automationexercise.com/login");
    cy.get('[data-qa="login-email"]').type(username);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();

    cy.get('[data-qa="login-email"]')
      .invoke("prop", "validationMessage")
      .should("eq", "Please enter an email address.");
  });
});
