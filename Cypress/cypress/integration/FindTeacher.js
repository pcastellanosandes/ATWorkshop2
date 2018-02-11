describe('find teacher', function() {
    it('find teacher', function() {
        cy.visit('https://losestudiantes.co')
        //cierra popup
        cy.contains('Cerrar').click()
        //Find teacher

        cy.get('.buscador').click().find('input[role="combobox"]').type("Jose Barreto{enter}",{force:true, timeout:2})
        cy.contains('Jose Manuel Barreto - Derecho')

    })

})
