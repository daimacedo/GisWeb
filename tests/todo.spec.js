var datePicker = require('../pages/datePicker');

describe('Parte 1: ', () => {

    beforeEach(() => {
         datePicker.getHomePage();
    });

    it('Check title is displayed', () => {
       
    expect(datePicker.getTitle()).toContain('Basic Usage');
    datePicker.selecionaData();
    })



    });