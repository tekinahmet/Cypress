describe("Custom Command", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.wait(1000);
  });
  let dataSet;
  before(() => {
    cy.fixture("magentoLogin").then((data) => {
      dataSet = data;
    });
  });

  it("Magento-Valid Login", () => {
    cy.magentoLogin(dataSet.validEmail, dataSet.validPassword);
  });

  it("Magento-Invalid Login with invalid username", () => {
    cy.magentoLogin(dataSet.invalidEmail, dataSet.validPassword);
    cy.get("#email-error").should('be.visible');
  });

  it.only("Magento-Invalid Login with invalid password", () => {
    cy.magentoLogin(dataSet.validEmail, dataSet.invalidPassword);
  });
  it("Magento-Invalid Login with invalid data", () => {
    cy.magentoLogin(dataSet.invalidEmail, dataSet.invalidPassword);
  });
});
