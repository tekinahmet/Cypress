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
describe("fixture()", () => {
  it("Kitap Yurdu-fixture() metodunun kullanimi", () => {
    cy.visit("https://www.kitapyurdu.com");

    cy.fixture("kitapYurdu").then((veriDosyasi) => {
      cy.get("#search-input").type(veriDosyasi.kelime + "{enter}");
      cy.get('[class="product-list"]')
        .find(".name")
        .each(($urunAdi) => {
          cy.wrap($urunAdi)
            .invoke("text")
            .then((baslik) => {
              expect(baslik.toLowerCase().trim()).to.include(
                veriDosyasi.kelime
              );
            });
        });
    });
  });
  it("tool shop registration", () => {
    cy.visit("https://practicesoftwaretesting.com/#/");

    let jsonData = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    cy.writeFile("cypress/fixtures/toolShop.json", jsonData);
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

      cy.get("#email").type(jsonData.email);

      cy.get("#password").type(jsonData.password);
      //cy.get("#password").type(faker.internet.password({ length: 10 }));

      cy.get(".btnSubmit").click();
    });
    cy.get("h3").should("have.text", "Login");
  });
  it.only("Tool Shop-fixture() metodunun kullanimi", () => {
    cy.visit("https://practicesoftwaretesting.com/#/");

    cy.get('[data-test="nav-sign-in"]').click();

    cy.fixture("toolShop").then((dataFile) => {
      cy.get("#email").type(dataFile.email);

      cy.get("#password").type(dataFile.password);
    });

    cy.get('[value="Login"]').click();
  });
});
