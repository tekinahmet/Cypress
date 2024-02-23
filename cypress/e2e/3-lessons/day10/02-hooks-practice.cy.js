const { beforeEach } = require("mocha");

describe("hooks practice", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get('[type="submit"]').click();
  });
  it("admin", () => {
    cy.contains("Admin").should("be.visible");
    cy.get(".oxd-topbar-header-breadcrumb").should("contain", "Admin");
  });
  it("PIM", () => {
    cy.contains("PIM").should("be.visible");
    cy.get(".oxd-topbar-header-breadcrumb").should("contain", "PIM");
  });
  it("Recruitment", () => {
    cy.contains("Recruitment").should("be.visible");
    cy.get(".oxd-topbar-header-breadcrumb").should("contain", "Recruitment");
  });
});
