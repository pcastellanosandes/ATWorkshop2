describe('los estudiantes create user with existing information', function() {
  beforeEach(function() {
       originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
       jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
     });

     afterEach(function() {
       jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });

    it('should visit los estudiantes and create account has to fail', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');

         browser.waitForVisible('.buscador',10000);
        var finder = browser.element('.buscador');
        finder.click();
        finder.keys('Mario Linares Vasquez');
        browser.element('.Select-menu-outer');

    });

});
