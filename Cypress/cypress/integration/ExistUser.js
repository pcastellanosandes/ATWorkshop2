describe('Create user with information that exists in the system', function() {
    it('new user cant register becuase the user exist', function() {
        cy.visit('https://losestudiantes.co')
        //cierra popup
        cy.contains('Cerrar').click()
        //Create account
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Paula")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Castellanos")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("pa.castellanos20@uniandes.edu.co")
        cy.get('.cajaSignUp').get('[type="checkbox"]').check()
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("test1234")
        cy.get('.cajaSignUp').get('select[name="idPrograma"]').select('Maestría en Ingeniería de Software')
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.contains('Ocurrió un error activando tu cuenta')

    })
})
