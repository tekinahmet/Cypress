// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('magentoLogin', (email, password) => {
    cy.contains("Sign In").click();
    cy.get("#email").type(email);
    cy.get("#pass").type(password);
    cy.get("#send2").click();
})

Cypress.Commands.add('wordSearch', (word)=>{
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get("#search").type(word);
    cy.get(".action.search").click();
    cy.get(".base").should("contain", word);
})