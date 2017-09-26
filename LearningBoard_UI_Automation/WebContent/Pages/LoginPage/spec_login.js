var LoginPage = require('../../Common/common_login.js');
var ObjectsLocators = require('../../ObjectRepository/ObjectsLocators.js');

var objectslocators = new ObjectsLocators();
var loginPage = new LoginPage();

describe('Testing Login', function() {
	var fs = require('fs');

	beforeAll(function() {
		browser.ignoreSynchronization = true;
		browser.get(browser.params.url);
		browser.driver.sleep(5000);
	});

	//---------------TestingLogin-------------------------//
	it('Login', function() {
		loginPage.login(browser.params.username, browser.params.password);
		browser.driver.sleep(5000);
		
		loginPage.qawrkspce();
		browser.driver.sleep(5000);
		
		expect(browser.driver.getCurrentUrl()).toContain("learningBoard.html");
		expect(objectslocators.welcomeText.getText()).toEqual("Welcome");
		browser.driver.sleep(3000);
	});
});