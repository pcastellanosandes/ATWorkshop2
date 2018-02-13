module.exports = {
  'Go to teacher page': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.buscador', 10000)
      .click('.buscador')
      .setValue('.buscador input[role="combobox"]','Mario Linares Vasquez')
      .waitForElementVisible('.Select-option', 10000)
      .assert.containsText('.Select-option', 'Mario Linares Vasquez - Ingeniería De Sistemas')
      .click('.Select-option')
      .waitForElementVisible('.nombreProfesor', 10000)
      .assert.containsText('.nombreProfesor', 'Mario Linares Vasquez')
      .end();
  }
};
