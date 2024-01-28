describe('Test Asamalari', () => {
    it('Temel Komutlar', () => {
        cy.visit('https://www.kitapyurdu.com'); //Given--> precondition
        cy.contains('Üye ol').click(); //When --> action
        cy.url().should('contain', 'account/register'); //Then --> assertion
    });
});