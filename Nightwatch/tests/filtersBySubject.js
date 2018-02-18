module.exports = {
  'Filter by subjects': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.buscador', 10000)
      .click('.buscador')
      .setValue('.buscador input[role="combobox"]','Mario Linares Vasquez')
      .waitForElementVisible('.Select-option', 10000)
      .assert.containsText('.Select-option', 'Mario Linares Vasquez - Ingeniería De Sistemas')
      .click('.Select-option')
      .waitForElementVisible('.materias', 20000)
      .click('.materias input[name="id:ISIS3510"]')
      .waitForElementVisible('#profesor_cantidad', 10000)
      .assert.containsText('#profesor_cantidad',6)
      .end();
  }
};
