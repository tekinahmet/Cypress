/* 1. https://automationteststore.com adresini ziyaret et
2. Login ol
a. Login Name = techpro
b. Password = techpro!
3. "Welcome back …" menüsündeki “Manage Address Book” seçeneğine tıkla
4. Edit butonuna tıkla
5. Formdaki tüm bilgileri değiştir ve kaydet
6. Değişikliklerin uygulandığını doğrula */

describe("Eylem komutları", () => {
  it("uygulama06", () => {
    cy.visit("https://automationteststore.com");

    cy.contains("Login").click();

    cy.get("#loginFrm").within(() => {
      cy.get("#loginFrm_loginname").type("techpro");
      cy.get("#loginFrm_password").type("techpro!");
      cy.get('[title = "Login"]').click();
    });

    cy.get("#customer_menu_top").trigger("mouseover");
    cy.contains("Manage Address Book").click();
    cy.get(".contentpanel").within(() => {
      cy.contains("Edit").click();
    });
    cy.get(".registerbox").within(() => {
      cy.get("#AddressFrm_firstname").clear().type("ali");
      cy.get("#AddressFrm_lastname").clear().type("su");
      cy.get("#AddressFrm_company").clear().type("ibm");
      cy.get("#AddressFrm_address_1").clear().type("25 Street");
      cy.get("#AddressFrm_address_2").clear().type("25 Street");
      cy.get("#AddressFrm_country_id").select("Malaysia");
      cy.get("#AddressFrm_zone_id").select("1977");
      cy.get("#AddressFrm_postcode").clear().type("43000");
      cy.get("#AddressFrm_default0").check();
      cy.get('[title="Continue"]').click();
    });
    cy.contains("Your address has been successfully updated").should('exist');
    //cy.get('alert).should('contain', 'Your address has been successfully updated');
  });
});
