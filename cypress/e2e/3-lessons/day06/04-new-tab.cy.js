describe("new tab", () => {
  it("removing target attribute", () => {
    cy.visit("https://www.letskodeit.com/practice");

    cy.get("#opentab").invoke("removeAttr", "target").click();

    cy.get("#search").type("basketball");
  });

  it.only("handling new window", () => {
    cy.visit("https://www.letskodeit.com/practice");

    cy.visit("https://www.letskodeit.com/courses");

    cy.get("#search").type("basketball", {action: "enter"});
  });
});
