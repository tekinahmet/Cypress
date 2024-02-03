describe("js alert", () => {
  it("confirm alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get('[onclick="jsAlert()"]').click("bottomLeft");
    cy.on("window:alert", (message) => {
      expect(message).to.equal("I am a JS Alert");
    });
  });

  it("cancel alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get('[onclick="jsConfirm()"]').click("topRight");
    cy.on("window:confirm", () => {
      //return false; // to cancel
      return true; //   to confirm
    });
  });
  
  it.only("prompt alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.window().then((Alert) => {
      cy.stub(Alert, "prompt").returns("cypress");
      cy.get('[onclick="jsPrompt()"]').click("topRight");
    });
  });
});
