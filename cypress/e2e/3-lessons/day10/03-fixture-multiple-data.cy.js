describe("fixture() multiple data", () => {
  let dataSet;
  before(() => {
    cy.visit("https://www.kitapyurdu.com");
    cy.fixture("kitapYurdu-2").then((data) => {
      dataSet = data;
    });
  });
  it("testing search bar", () => {
    dataSet.forEach((dataTest) => {
      cy.get("#search-input").type(dataTest.kelime);
      cy.get(".button-search").click();
      cy.get("h1").should("contain", dataTest.kelime);
      cy.get("#search-input").clear();
    });
  });
});
