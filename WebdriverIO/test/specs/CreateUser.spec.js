// describe('los estudiantes create user with existing information', function() {
//   beforeEach(function() {
//        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
//        jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
//      });
//
//      afterEach(function() {
//        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
//      });
//
//     it('should visit los estudiantes and create account has to fail', function () {
//         browser.url('https://losestudiantes.co');
//         browser.click('button=Cerrar');
//         browser.waitForVisible('button=Ingresar', 10000);
//         browser.click('button=Ingresar');
//
//         var cajaSignUp = browser.element('.cajaSignUp');
//
//         var nameInput = cajaSignUp.element('input[name="nombre"]');
//         nameInput.click();
//         nameInput.keys('Paula');
//
//         var lastNameInput = cajaSignUp.element('input[name="apellido"]');
//         lastNameInput.click();
//         lastNameInput.keys('Castellanos');
//
//         var mailInput = cajaSignUp.element('input[name="correo"]');
//         mailInput.click();
//         mailInput.keys('pa.castellanos22@uniandes.edu.co');
//
//         cajaSignUp.element('input[name="acepta"]').click();
//
//         var passwordInput = cajaSignUp.element('input[name="password"]');
//         passwordInput.click();
//         passwordInput.keys('test1234');
//
//
//         cajaSignUp.element('select[name="idPrograma"]').selectByValue('12'); //Ingenieria de sistemas y de computaciòn
//
//         browser.click('button=Registrarse');
//
//         var alert = browser.waitForVisible('.sweet-alert', 10000);
//         expect(browser.getTagName('h2=Ocurrió un error activando tu cuenta')).toBe('h2');
//
//     });
//
// });
