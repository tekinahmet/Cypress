describe("uygulama-01", () => {
  it("Temel Fonksiyonlarin Kullanilmasi", () => {
    //visit https://www.kitapyurdu.com
    cy.visit("https://www.kitapyurdu.com");

    cy.url().should("include", "kitapyurdu");

    //click on register button
    cy.xpath("//a[text()='Üye Ol']").click();

    //enter your name and assert it
    cy.xpath("//input[@id='register-name']")
      .type("ahmet")
      .should("have.value", "ahmet");
  });
});
