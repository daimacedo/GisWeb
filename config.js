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
    parte1: ['./tests/todo.spec.js']
  }

};