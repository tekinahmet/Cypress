describe('xpath', () => {
    it('xpath ile konum alma', () => {
        cy.visit('https://www.kitapyurdu.com')

        //tag name
        cy.xpath("//input[@name='q']")

        //id value
        cy.xpath("//input[@id='search-input']")

        //class name
        cy.xpath("//input[@class='logo-icon']")

        //attribute value
        cy.xpath("//input[@name='q']")

        //class value
        cy.xpath("//input[@class='top-menu fr']")

        //tag name and attribute value
        cy.xpath("//input[@name='q']")

        //full text value
        cy.xpath("//input[@id='search-input']")

        //contains text value
        cy.xpath("//input[contains(@class,'logo-icon')]")

        //multiple atribute value
        cy.xpath("//input[@name='q'][@class='top-menu fr']")

    });
});