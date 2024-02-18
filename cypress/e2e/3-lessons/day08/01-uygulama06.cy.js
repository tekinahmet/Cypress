const { faker } = require("@faker-js/faker");

let username = faker.person.firstName();
let lastName = faker.person.lastName();
let address = faker.location.streetAddress();
let postcode = faker.location.zipCode();
let city = faker.location.city();
let state = faker.location.state();
let phoneNumber = faker.phone.number();
//let email = faker.internet.email();
//let password = faker.internet.password();

describe("uygulama-06", () => {
  it("tool shop registration", () => {
    cy.visit("https://practicesoftwaretesting.com/#/");

    let email = faker.internet.email();
    cy.writeFile("cypress/fixtures/email.txt", email);

    let password = faker.internet.password();
    cy.writeFile("cypress/fixtures/password.txt", password);

    cy.get('[data-test="nav-sign-in"]').click();

    cy.get('[data-test="register-link"]').click();

    cy.get('[data-test="register-form"]').within(() => {
      //cy.get("#first_name").type(username);
      cy.get("#first_name").type(faker.person.firstName());

      cy.get("#last_name").type(lastName);

      cy.get("#dob").type("1990-04-22");

      cy.get("#address").type(address);

      cy.get("#postcode").type(postcode);

      cy.get("#city").type(city);

      cy.get("#state").type(state);

      //cy.get("#country").select(1).should("exist");
      cy.get("#country")
        .select(faker.number.int({ min: 0, max: 150 }))
        .should("exist"); //random number

      //cy.get("#phone").type(phoneNumber);
      cy.get("#phone").type(faker.number.int({ min: 10, max: 12 }));

      cy.get("#email").type(email);

      cy.get("#password").type(password);
      //cy.get("#password").type(faker.internet.password({ length: 10 }));

      cy.get(".btnSubmit").click();
    });
    cy.get("h3").should("have.text", "Login");
  });

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

    cy.get('[data-test="nav-user-menu"]').should("be.visible");
  });

  it("favourite pages", () => {
    cy.visit("https://practicesoftwaretesting.com/#/");

    cy.get('[data-test="nav-sign-in"]').click();

    cy.readFile("cypress/fixtures/email.txt").then((email) => {
      cy.get("#email").type(email);
    });

    cy.readFile("cypress/fixtures/password.txt").then((password) => {
      cy.get("#password").type(password);
    });

    cy.get('[value="Login"]').click();

    cy.get('[data-test="nav-user-menu"]').should("be.visible");

    cy.get('[data-test="nav-favorites"]').click();

    cy.contains("There are no favorites yet.").should("be.visible");
  });

  it.only("favourite", () => {
    
cy.visit("https://practicesoftwaretesting.com/#/");
    cy.get('[data-test="nav-sign-in"]').click();

    cy.readFile("cypress/fixtures/email.txt").then((email) => {
      cy.get("#email").type(email);
    });

    cy.readFile("cypress/fixtures/password.txt").then((password) => {
      cy.get("#password").type(password);
    }); 

    cy.get('[value="Login"]').click();

    cy.get('[data-test="nav-user-menu"]').should("be.visible");

    cy.get('[data-test="nav-favorites"]').click();

    cy.get('[data-test^="favorite"]')
      .should("exist")
      .and("contain", "Combination Pliers");
  });
});
