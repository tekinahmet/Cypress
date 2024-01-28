const { should } = require("chai");

describe("Temel Test Fonksiyonlari", () => {
  it("visit(), get(), click(), type(),should() fonksiyonlarinin kullanimi", () => {
    cy.visit("https://www.kitapyurdu.com");
    //visit() --> sayfayi acar

    cy.get("locator").should("be.visible").click();
    //get() --> locator ile belirtilen elementi bulur
    //click() --> locator ile belirtilen elemente tiklar

    cy.get("locator")
      .should("have.value", "")
      .type("text")
      .should("have.value", "text");
    //type() --> locator ile belirtilen elemente text gonderir
    //should() --> locator ile belirtilen elementin textini kontrol eder
  });
});
