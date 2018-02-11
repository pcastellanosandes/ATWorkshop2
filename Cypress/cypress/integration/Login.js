describe('Login user', function() {
    it('The new user can login to the page', function() {
      cy.visit('https://losestudiantes.co')
      //cierra popup
      cy.contains('Cerrar').click()
      //login fallido
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("pa.castellanos12@uniandes.edu.co")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("test1234")
      cy.get('.cajaLogIn').contains('Ingresar').click()

      cy.get("#cuenta").click()
      cy.get('ul[role="menu"] li:first').click()
    })
})
