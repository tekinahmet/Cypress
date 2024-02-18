describe("Listelerle Calismak", () => {
  it.only("Kitap Yurdu- each() ve wrap() metotlarinin kullanimi", () => {
    cy.visit("https://www.kitapyurdu.com");

    //cy.get('.bestseller-cr .name');
    cy.get(".bestseller-cr .name").each(($kitap, index) => {
      cy.log(index + 1 + " " + $kitap.text());
      //$kitap jquery değiskeni
      cy.wrap($kitap).should("be.visible");
    });
  });

  it("Tool Shop- each() ve wrap() metotlarinin kullanimi", () => {
    cy.visit("https://practicesoftwaretesting.com/#/");

    /*  cy.get('.col-md-9 [data-test="product-name"]').each(($product, index)=>{
        cy.log(index + 1 + "-" + $product.text());
    }); */

    cy.get(".col-md-9")
      .find('[data-test="product-name"]')
      .each(($product, index) => {
        cy.log(index + 1 + "-" + $product.text());
        cy.wrap($product)
          .invoke("text") //elemetin textini alır
          .should("exist")
          .and("have.length.greaterThan", 3);
      });
  });
});
