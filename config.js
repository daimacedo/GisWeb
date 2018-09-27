exports.config = {
  
  seleniumAddress: 'http://localhost:4444/wd/hub',
 // baseURL: 'https://material.angularjs.org/latest/demo/datepicker',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: ['--lang=pt-BR', 'start-maximized'//, '--headless'
         ],
    },
  },
  suites: {
    ficha: ['./tests/buscarFicha.spec.js']
  },

    jasmineNodeOpts:{
      showColors: true,
      silent: true,
      defaultTimeoutInterval: 360000,
      print: function(){

      }
    },

    onPrepare: () => {
    let AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({resultsDir: 'allure-results'}));

    let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
          displayStacktrace: true,
          displayErrorMessages: true,
          displayFailed:true,
          displayDuration:true
        },

        summary:{
          displayErrorMessages: true,
          displayStacktrace: true,
          displaySuccessful: true,
          displayFailed: true,
          displayDuration: true
        },

        colors:{
          enabled:true
        }
    }))

    }

};