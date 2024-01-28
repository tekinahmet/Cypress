describe("uygulama-02", () => {
  it("Temel Fonksiyonlarin Kullanilmasi-Amazon", () => {
    cy.visit("https://www.amazon.com");
    cy.get("#twotabsearchtextbox")
      .type("iphone")
      .should("have.value", "iphone");
    cy.get("#nav-search-submit-button").click();
    cy.get(".a-color-state").should("contain", "iphone");
  });
});
  