describe("Listelerle Calismak", () => {
  it("Kitap Yurdu-Arama Listesindeki Urun Basliklarini Dogrulama", () => {
    cy.visit("https://www.kitapyurdu.com");
    let arananKelime = "java";
    cy.get("#search-input").type(`${arananKelime}{enter}`);
    cy.get('[class="product-list"]')
      .find(".name")
      .each(($urunAdi) => {
        cy.wrap($urunAdi)
          .invoke("text")
          .then((baslik) => {
            expect(baslik.toLowerCase().trim()).to.include(arananKelime);
          });
      });
  });
});
