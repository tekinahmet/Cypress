describe("uygulama-01", () => {
  it("Temel Fonksiyonlarin Kullanilmasi", () => {
    //visit https://www.kitapyurdu.com
    cy.visit("https://www.kitapyurdu.com");

    //click on register button
    cy.get(".register > a").click();

    //enter your name and assert it
    cy.get("#register-name").type("ahmet").should("have.value", "ahmet");
  });
});
