describe("type ve clear metod kullanimi", () => {
  it.only("type(), clear()", () => {
    cy.visit("https://www.letskodeit.com/practice");

    //option ile kullanim
    //force
    cy.get("#disabled-button").click();
    cy.get("#enabled-example-input").type("Techpro", { force: true });
    cy.wait(3000);
    cy.get("#enabled-example-input").clear({ force: true });

    //sequence
    // cy.get("#enabled-example-input").type("Techpro{selectAll}{backspace}", {
    //   delay: 500,
    // });
  });

  it("Kitap yurdu arama motorunda sequence kullanimi", () => {
    cy.visit("https://www.kitapyurdu.com");
    cy.get("#search-input").type("cypress{enter}");
  });
});
