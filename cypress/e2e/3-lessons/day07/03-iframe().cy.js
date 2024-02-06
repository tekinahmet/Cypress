describe("iframe()", () => {
  it("iframe()", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");

    cy.get("h3").should(
      "have.text",
      "An iFrame containing the TinyMCE WYSIWYG Editor"
    );

    cy.frameLoaded("#mce_0_ifr");

    cy.iframe().find("p").clear();

    cy.iframe().find("p").type("Hello World");

    cy.get("h3").should(
      "have.text",
      "An iFrame containing the TinyMCE WYSIWYG Editor"
    );
  });
});
