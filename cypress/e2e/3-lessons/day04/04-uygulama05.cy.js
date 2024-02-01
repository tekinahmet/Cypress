describe("uygulama05", () => {
  it("https://automationteststore.com adresini ziyaret et", () => {
    cy.visit("https://automationteststore.com");
    //cy.xpath("//a[.='Login or register']").click();
    cy.contains("Login or register").click();
    cy.get("#loginFrm_loginname").type("techpro");
    cy.get("#loginFrm_password").type("techpro!");
    cy.get("#loginFrm > fieldset > .btn").click();
    cy.get(".side_account_list > :nth-child(3) > a").click();

    cy.get(".contentpanel").within(() => {
      cy.get("#AccountFrm_firstname").clear();
      cy.get("#AccountFrm_lastname").clear();
      cy.get("#AccountFrm_email").clear();
      cy.get("#AccountFrm_telephone").clear();
      cy.get("#AccountFrm_fax").clear();
    });
    cy.get(".col-md-12 > .btn-orange").click();
    cy.get(".alert").should(
      "contain",
      "Oops, there is an error with information provided!"
    );
  });
});

/* 1. https://automationteststore.com adresini ziyaret et
2. Login ol
a. Login Name = techpro
b. Password = techpro!
3. "Login" butonuna tıkla
4. Edit account details butonuna tıkla
5. Formdaki dolu olan alanları temizle */
