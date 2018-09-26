var EC = protractor.ExpectedConditions;
var HomePage = function(){
	
	var url = 'http://audsat-teste.dextra.tech:8080/';
	this.labelNumFicha = element(by.cssContainingText('label','Número da Ficha:'));
	this.txtNumFicha = element(by.name('numFicha'));
	this.btnBuscar = element(by.cssContainingText('button','Buscar'));

	this.getHomePage = function() {
        browser.get(url);
    }

	this.getLabelNumFicha = function(){
	
	// this.labelNumFicha.getText().then(function(text) {
 // 		 console.log(text);
	// });
		return this.labelNumFicha.getText();
	}

	this.getTxtNumFicha = function(){
		return this.txtNumFicha;
	}

	this.getBtnBuscar = function(){
		return this.btnBuscar;
	}

};

module.exports = new HomePage();