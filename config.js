exports.config = {
  
  seleniumAddress: 'http://localhost:4444/wd/hub',
 // baseURL: 'https://material.angularjs.org/latest/demo/datepicker',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: ['--lang=pt-BR', 'start-maximized'],
    },
  },
  suites: {
    ficha: ['./tests/buscarFicha.spec.js']
  }

};