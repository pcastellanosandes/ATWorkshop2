describe('Create user', function() {
    it('new user register', function() {
        cy.visit('https://losestudiantes.co')
        //cierra popup
        cy.contains('Cerrar').click()
        //Find teacher

        cy.get('.buscador').click().find('input[role="combobox"]').type("Jose Barreto{enter}",{force:true, timeout:2})
        cy.contains('Jose Manuel Barreto - Derecho')

        //Create account
        // cy.contains('Ingresar').click()
        // cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Paula")
        // cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Castellanos")
        // cy.get('.cajaSignUp').find('input[name="correo"]').click().type("pa.castellanos22@uniandes.edu.co")
        // cy.get('.cajaSignUp').get('[type="checkbox"]').check()
        // cy.get('.cajaSignUp').find('input[name="password"]').click().type("test1234")
        // cy.get('.cajaSignUp').get('select[name="idPrograma"]').select('Maestría en Ingeniería de Software')
        // cy.get('.cajaSignUp').contains('Registrarse').click()
        // cy.contains('Registro exitoso!')
        // //Logout of the recent acount
        // cy.get(".sweet-alert").get('button[class="btn btn-lg btn-primary"]').click()
        // cy.get("#cuenta").click()
        // cy.get('ul[role="menu"] li:first').click()
    })
})
