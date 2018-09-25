var EC = protractor.ExpectedConditions;
var HomePage = function(){
	
	var url = 'https://material.angularjs.org/latest/demo/datepicker';
	this.title = element(by.name('basic-usage'));
	this.btnCalendar = element(by.xpath("//div[@class='flex-gt-xs'][1]//md-datepicker/button"));
	this.dia23 = element(by.cssContainingText('span','28'));

	this.getHomePage = function() {
        browser.get(url);
    }

	this.getTitle = function(){
		return this.title.getText();
	}

	this.selecionaData = function(){
		this.btnCalendar.click();
		browser.sleep('2000');
		this.dia23.click();
		browser.sleep('2000');

	}

};

module.exports = new HomePage();