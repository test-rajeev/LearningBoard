var LoginPage = require('../../Common/common_login.js');
var ObjectsLocators = require('../../ObjectRepository/ObjectsLocators.js');

var objectslocators = new ObjectsLocators();
var loginPage = new LoginPage();

describe('Testing Hub', function() {
	var fs = require('fs');

	beforeAll(function() {
		browser.ignoreSynchronization = true;
		browser.get(browser.params.url);
		browser.driver.sleep(5000);
	});

	//---------------TestingLogin-------------------------//
	it('Login', function() {
		loginPage.login(browser.params.username, browser.params.password);
		browser.driver.sleep(2000);
		
		loginPage.qawrkspce();
		browser.driver.sleep(9000);
		expect(browser.driver.getCurrentUrl()).toContain("learningBoard.html");
		expect(objectslocators.welcomeText.getText()).toEqual("Welcome");
	});
	
	//---------------TestingLoginAs-------------------------//
	it('HubLoginAs', function() {
		//loginPage.switchIFrame(objectslocators.iframe1);
		//browser.driver.sleep(2000);
		//objectslocators.exitHelpOverlay.click();
		//browser.driver.sleep(2000);
		
		objectslocators.loginAsDrpDw.click();
		browser.driver.sleep(3000);
		objectslocators.loginAsISCTeacher.click();
		browser.driver.sleep(5000);
		expect("");
	});
	
});