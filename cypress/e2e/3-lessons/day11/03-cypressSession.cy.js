describe("Cypress Session", () => {
  beforeEach(() => {
    cy.orangehrmSessionLogin("Admin", "admin123");
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });
  it("admin", () => {
    cy.contains("Admin").click();
    cy.get(".oxd-topbar-header-breadcrumb").should("contain", "Admin");
  });
  it("PIM", () => {
    cy.contains("PIM").click();
    cy.get(".oxd-topbar-header-breadcrumb").should("contain", "PIM");
  });
  it("Recruitment", () => {
    cy.contains("Recruitment").click();
    cy.get(".oxd-topbar-header-breadcrumb").should("contain", "Recruitment");
  });
});
