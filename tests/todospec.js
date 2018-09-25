
var datePicker = require('../pages/DatePicker');
describe('angularjs homepage todo list', function() {
  beforeEach(() => {
        datePicker.getHomePage();
});

  it('should add a todo', function() {
    
    expect(datePicker.getTitle()).toContain('Basic Usage');


   });
});