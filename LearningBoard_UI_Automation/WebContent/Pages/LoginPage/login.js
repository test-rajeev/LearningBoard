var ObjectsLocators = require('../../ObjectRepository/ObjectsLocators.js');
var objectslocators = new ObjectsLocators();

/*module.exports = function() {
//var obj= JSON.parse(fs.readFileSync('WebContent\Resources\testdata.json', 'utf8'));
 var EC = protractor.ExpectedConditions;

 this.login = function(username,password) {
 browser.wait(EC.visibilityOf(objectslocators.loginButton), 3000)
 .then(function(){
 objectslocators.userInput.sendKeys(username);
 objectslocators.passwordInput.sendKeys(password);
 objectslocators.loginButton.click();
 });
 };

 this.qawrkspce = function() {	 
 browser.wait(EC.visibilityOf(objectslocators.iscSpace), 3000)
 .then(function(){
 objectslocators.iscSpace.click();  
 });
 };  */

describe('Testing Login', function() {

	var fs = require('fs');

	beforeAll(function() {
		browser.ignoreSynchronization = true;
		browser.get(browser.params.url);
		browser.driver.sleep(5000);
	});

	//---------------TestingLogin-------------------------//
	it('Login', function() {
		objectslocators.userInput.sendKeys(browser.params.username);
		browser.driver.sleep(2000);
		objectslocators.passwordInput.sendKeys(browser.params.password);
		browser.driver.sleep(2000);
		objectslocators.loginButton.click();
		//login(browser.params.userName, browser.params.password);
		browser.driver.sleep(2000);

		//qawrkspce();
		objectslocators.iscSpace.click();
		browser.driver.sleep(2000);
		
		
	});
});

//};