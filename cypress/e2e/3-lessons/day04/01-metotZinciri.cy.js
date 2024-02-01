/* 1. https://automationteststore.com sitesine git
2. 'Contact Us' bağlantısına tıkla
3. Kayıt formunu tamamla
4. Kaydın gerçekleştiğini doğrula */

describe("automationteststore", () => {
  it("verification", () => {
    cy.visit("https://automationteststore.com");
    cy.get(".info_links_footer > :nth-child(5) > a").click();
    cy.get("#ContactUsFrm").within(() => {
      cy.get("#ContactUsFrm_first_name").type("ahmet");
      cy.get("#ContactUsFrm_email").type("ahmet@ahmet.com");
      cy.get("#ContactUsFrm_enquiry").type("hello");
      cy.get(".col-md-6 > .btn").click();
    });
    //cy.url().should("include", "success");
    cy.get(".mb40")
      .find("p")
      .should("exist")
      .and("be.visible")
      .and(
        "have.text",
        "Your enquiry has been successfully sent to the store owner!"
      );
  });
});
