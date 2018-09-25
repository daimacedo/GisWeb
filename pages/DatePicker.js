var EC = protractor.ExpectedConditions;
var HomePage = function(){
	
	//var url = 'https://material.angularjs.org/latest/demo/datepicker';
	this.linkCadastraSe = element(by.cssContainingText('div','Cadastrar-se'));
	this.title = element(by.name('basic-usage'));

	this.getHomePage=funcion(){
		browser.get();
	}

	this.getTitle = funcion(){
		return title.getText();
	}

}