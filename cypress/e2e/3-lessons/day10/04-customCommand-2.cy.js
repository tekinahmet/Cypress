describe("Custom Command", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });
  let dataSet;
  before(() => {
    cy.fixture("magentoLogin").then((data) => {
      dataSet = data;
    });
  });

  it("Magento-Valid Login", () => {
    cy.magentoLogin(dataSet.email, dataSet.password);
  });

  it("Magento-Invalid Login with invalid username", () => {
    cy.magentoLogin("aedyn.kewon@fixedfor", "*9kJceG5*TSWXhb");
  });

  it("Magento-Invalid Login with invalid password", () => {
    cy.magentoLogin("aedyn.kewon@fixedfor.com", "*9kJceG5*TSW");
  });
  it("Magento-Invalid Login with invalid data", () => {
    cy.magentoLogin("aedyn.kewon@fixedfor", "*9kJceG5*TSW");
  });
});
