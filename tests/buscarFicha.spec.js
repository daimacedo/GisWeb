var homePage = require('../pages/homePage');
var EC = protractor.ExpectedConditions;
var helper = require('../commom/helper')

describe('Parte 1: ', () => {

    beforeEach(() => {
         homePage.getHomePage();
    });

    it('Check if elements are presents', () => {
    
   	expect(homePage.getLabelNumFicha()).toContain('Número da Ficha');
    browser.wait(EC.presenceOf(homePage.getTxtNumFicha()), 5000);
    browser.wait(EC.presenceOf(homePage.getBtnBuscar()), 5000);
    })

    afterEach(() =>{
      helper.takeShot();
    })

    });