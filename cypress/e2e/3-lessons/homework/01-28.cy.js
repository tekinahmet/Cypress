describe("uygulama-03", () => {
  it("Temel Fonksiyonlarin Kullanilmasi- CSS Selector", () => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("ahmet");
    cy.get('[name="last_name"]').type("mehmet");
    cy.get('[name="email"]').type("XuQpS@example.com");
    cy.get("textarea.feedback-input").type("merhaba");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });
});
