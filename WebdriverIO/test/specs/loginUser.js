var assert = require('assert');

describe('los estudiantes login', function() {
  beforeEach(function() {
       originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
       jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
     });

     afterEach(function() {
       jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });

    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 10000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('pa.castellanos22@uniandes.edu.co');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('test1234');
        cajaLogIn.element('button=Ingresar').click();
        browser.waitForVisible('#cuenta', 5000);
        browser.element('#cuenta').click()

    });

});
