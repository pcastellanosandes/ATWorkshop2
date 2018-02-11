describe('find teacher', function() {
    it('find teacher', function() {
        cy.visit('https://losestudiantes.co')
        //cierra popup
        cy.contains('Cerrar').click()
        //Find teacher

        cy.get('.buscador').click().find('input[role="combobox"]').type("Jose Barreto{enter}",{force:true})
        cy.contains('Jose Manuel Barreto - Derecho')

    })
})

describe('go to page teacher', function() {
    it('go to page teacher', function() {
        cy.visit('https://losestudiantes.co')
        //cierra popup
        cy.contains('Cerrar').click()
        //Find teacher
        cy.get('.buscador').click().find('input[role="combobox"]').type("Jose Manuel Barreto{enter}{enter}",{force:true})
        cy.contains('Jose Manuel Barreto - Derecho')
        cy.get("#universidad").contains('Universidad de Los Andes')
    })

  })

  describe('Filter by subject', function() {
      it('Filter by subject', function() {
          cy.visit('https://losestudiantes.co')
          //cierra popup
          cy.contains('Cerrar').click()
          //Find teacher
          cy.get('.buscador').click().find('input[role="combobox"]').type("Mario Linares Vasquez{enter}{enter}",{force:true})
          cy.get('input[name="id:ISIS3510"]').check()
      })

    })
