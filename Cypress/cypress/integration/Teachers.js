describe('find teacher', function() {
    it('find teacher', function() {
        cy.visit('https://losestudiantes.co')
        //cierra popup
        cy.contains('Cerrar').click()
        //Find teacher

        //cy.get('.buscador').find('input[role="combobox"]').type("Jose Barreto", {force:true})
        cy.get('.buscador').find('input[role="combobox"]').type("Jose Manuel Barreto", {force:true, timeout:10000})
        cy.wait(10000)
        cy.contains('Jose Manuel Barreto - Derecho')



        // .setValue('.buscador input[role="combobox"]','Mario Linares Vasquez')
        // .waitForElementVisible('.Select-option', 10000)
        // .assert.containsText('.Select-option', 'Mario Linares Vasquez - Ingeniería De Sistemas')
        // .click('.Select-option')
        // .waitForElementVisible('.nombreProfesor', 10000)
        // .assert.containsText('.nombreProfesor', 'Mario Linares Vasquez')

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
