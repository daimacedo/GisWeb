exports.config = {
  
 // seleniumAddress: 'http://localhost:4444/wd/hub',
  baseURL: 'https://material.angularjs.org/latest/demo/datepicker',
  capabilities: {
    'browserName': 'firefox',
    'chromeOptions': {
      args: ['--lang=pt-BR', 'start-maximized'],
    },
  },
  specs: ['./tests/todospec.js']

};