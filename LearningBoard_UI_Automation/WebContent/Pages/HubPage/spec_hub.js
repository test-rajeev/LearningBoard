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
		browser.driver.sleep(6000);
		
		loginPage.qawrkspce();
		browser.driver.sleep(9000);
		expect(browser.driver.getCurrentUrl()).toContain("learningBoard.html");
		expect(objectslocators.welcomeText.getText()).toEqual("Welcome");
	});
	
	//---------------TestingLoginAs-------------------------//
	it('HubLoginAs', function() {
	browser.switchTo().frame(objectslocators.iframe1.getWebElement());
	objectslocators.exitHelpOverlay.click();
	browser.driver.sleep(3000);
	browser.switchTo().defaultContent();
	
		objectslocators.loginAsDrpDw.click();
		browser.driver.sleep(3000);
		objectslocators.loginAsISCTeacher.click();
		browser.driver.sleep(8000);		
		expect(objectslocators.teacherName.getText()).toContain(browser.params.iscteachername);
	});
	
});