describe("automationteststore", () => {
  it("Css Selector", () => {
    cy.visit("https://automationteststore.com");

    cy.get("#customer_menu_top > li").click();

    cy.get("#loginFrm_loginname").type("techpro");

    cy.get("#loginFrm_password").type("techpro!");

    cy.get("[title=Login]").click();

    cy.get("[class=menu_text]").should("contain", "Welcome back");
  });
});
describe("uygulama-03", () => {
  it("Temel Fonksiyonlarin Kullanilmasi- CSS Selector", () => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");

    //url() methodu ile url kontrolu
    cy.url().should("include", "contactus.html");
    cy.url().should(
      "eq",
      "https://www.webdriveruniversity.com/Contact-Us/contactus.html"
    );

    //title() methodu ile title kontrolu
    cy.title().should("eq", "WebDriver | Contact Us");
    cy.title().should("contain", "WebDriver");

    cy.get('[name="first_name"]').type("ahmet");

    cy.get('[name="last_name"]').type("mehmet");

    cy.get('[name="email"]').type("XuQpS@example.com");

    cy.get("textarea.feedback-input")
      .type("merhaba")
      .should("have.value", "merhaba");

    cy.get('[type="submit"]').click();

    cy.get("h1").should("have.text", "Thank You for your Message!");
  });
});
