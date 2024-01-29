describe('Css Selector', () => {
    it('Css Selector', () => {
      cy.visit("htpps://www.kitapyurdu.com");

      //tag name
      cy.get("input");

      //id value
      cy.get("#search-input");

      //class name
      cy.get(".logo-icon");

      //attribute value
      cy.get('[name="q"]');

      //class value
      cy.get('[class="top-menu fr"]');

      //tag name and attribute value
      cy.get('input[name="q"]');

      //tag name and class value
      cy.get("input.logo-icon");

      //tag name and id value
      cy.get("input#search-input");

    });
});