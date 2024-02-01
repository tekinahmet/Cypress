describe('Eylem Metotlari-click()', () => {
    it('click() kullanimi', () => {
        cy.visit("https://www.letskodeit.com/practice");

        //elementin merkezine tıklama
        //cy.get("#opentab").click({log: false});

        //elementin farklı konumlarına tıklama
        // cy.get("#opentab").click('top');
        // cy.get("#opentab").click('left');
        // cy.get("#opentab").click('right');
        // cy.get("#opentab").click('bottom');
        // cy.get("#opentab").click("bottomLeft");
        // cy.get("#opentab").click("bottomRight");

        //koordinat alarak tıklama
         //cy.get("#opentab").click(-20, -20, {force:true});
 

         //birden cok elemente tiklama
         //cy.get('[type="checkbox"][name="cars"]').click({multiple:true});

         //scrollBehavior ile elementi istenen yere getirme
         cy.get('#mousehover').click({scrollBehavior:'nearest'});
    });
});