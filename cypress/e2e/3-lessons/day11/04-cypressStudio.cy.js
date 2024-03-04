describe('Cypress Studio', () => {
    it("Cypress Studio Usage", () => {
       
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('practicesoftwaretesting', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://practicesoftwaretesting.com/#/');
        cy.get('[data-test="nav-categories"]').click();
        cy.get('[data-test="nav-hand-tools"]').click();
        cy.get('[data-test="product-01HR4B24Y48J48K7XFMDVAK08R"] > .card-img-wrapper > .card-img-top').click();
        cy.get('[data-test="increase-quantity"]').click();
        cy.get('[data-test="increase-quantity"]').click();
        cy.get('[data-test="increase-quantity"]').click();
        cy.get('[data-test="increase-quantity"]').click();
        cy.get('[data-test="increase-quantity"]').click();
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('[data-test="cart-quantity"]').click();
        cy.get('[data-test="proceed-1"]').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it.only('practicesoftwaretesting 2', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://practicesoftwaretesting.com/#/');
        cy.get('[data-test="search-query"]').clear('p');
        cy.get('[data-test="search-query"]').type('pliers{enter}');
        cy.get('[data-test="search-submit"]').click();
        cy.get('[data-test="sort"]').select('price,desc');
        cy.get(':nth-child(13) > ul > :nth-child(4) > label').click();
        cy.get('[data-test="category-01HR4B24X7DAMFT9176E28RX1N"]').check();
        cy.get('[data-test="category-01HR4B24X7DAMFT9176E28RX1T"]').check();
        cy.get('[data-test="category-01HR4B24X7DAMFT9176E28RX1T"]').uncheck();
        cy.get('[data-test="category-01HR4B24X7DAMFT9176E28RX1N"]').uncheck();
        cy.get('[data-test="category-01HR4B24X7DAMFT9176E28RX1J"]').check();
        cy.get('[data-test="category-01HR4B24X7DAMFT9176E28RX1J"]').uncheck();
        cy.get('.ngx-slider-pointer-max').click();
        /* ==== End Cypress Studio ==== */
    });
    it.only("practicesoftwaretesting 3", function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://practicesoftwaretesting.com/#/');
        cy.get('[data-test="nav-sign-in"]').click();
        cy.get('#Layer_1').click();
        cy.get('[data-test="product-01HR4EG0ZFDHGCDZ4G704CY96G"] > .card-img-wrapper > .card-img-top').click();
        cy.get('[data-test="add-to-favorites"]').click();
        /* ==== End Cypress Studio ==== */
    });
});