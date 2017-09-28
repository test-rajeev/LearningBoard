var LoginPage = require('../../Common/common_login.js');
var ObjectsLocators = require('../../ObjectRepository/ObjectsLocators.js');

var objectslocators = new ObjectsLocators();
var loginPage = new LoginPage();

describe('Testing Feedback', function() {
	var fs = require('fs');

	beforeAll(function() {
		browser.ignoreSynchronization = true;
		browser.get(browser.params.url);		
		browser.driver.sleep(5000);
	});

	//---------------TestingLogin-------------------------//
		
	it('Login', function() {
		//loginPage.logoutifloggedinearlier();
		
		loginPage.login(browser.params.username, browser.params.password);
		browser.driver.sleep(6000);
		
		loginPage.qawrkspce();
		browser.driver.sleep(22000);
		expect(browser.driver.getCurrentUrl()).toContain("learningBoard.html");
		expect(objectslocators.welcomeText.getText()).toEqual("Welcome");
	});
	
	//---------------TestingGoto Feedback page-------------------------//
	it('ExitHelpOverlays', function() {
		browser.switchTo().frame(objectslocators.iframe1.getWebElement());
		objectslocators.exitHelpOverlay.click();
		browser.driver.sleep(3000);
		browser.switchTo().defaultContent();
		expect(objectslocators.welcomeText.getText()).toEqual("Welcome");
	
		});
	
	it('HubLoginAs', function() {	
		objectslocators.loginAsDrpDw.click();
		browser.driver.sleep(3000);
		objectslocators.loginAsISCTeacher.click();
		browser.driver.sleep(15000);		
		expect(objectslocators.teacherName.getText()).toContain(browser.params.iscteachername);
	});
	
	it('GotoFeedabckPage', function() {
		//loginPage.logoutifloggedinearlier();		
		objectslocators.hubDrpdwn.click();
		browser.driver.sleep(2000);
		objectslocators.feedbackbttninHub.click();
		browser.driver.sleep(4000);
		expect(objectslocators.teacherName.getText()).toContain(browser.params.iscteachername);

	});
	
	it('ExitHelpOverlays', function() {
		browser.switchTo().frame(objectslocators.iframe1.getWebElement());
		objectslocators.exitHelpOverlay.click();
		//browser.driver.sleep(2000);
		browser.switchTo().defaultContent();
		browser.driver.sleep(2000);
		browser.switchTo().frame(objectslocators.iframe1.getWebElement());
		expect(objectslocators.CourseLabel.getText()).toEqual("Course");
		browser.switchTo().defaultContent();
		browser.driver.sleep(2000);
		});
	
	it('VerifyHelpOverlays', function() {
		browser.switchTo().frame(objectslocators.iframe1.getWebElement());
		objectslocators.helpoverlaybttnOnFeedback.click();
		browser.driver.sleep(2000);
		objectslocators.exitHelpOverlay.click();
		browser.switchTo().defaultContent();
		browser.driver.sleep(2000);
		browser.switchTo().frame(objectslocators.iframe1.getWebElement());
		expect(objectslocators.Assessmenttypelbl.getText()).toEqual("Assessment type");
		browser.switchTo().defaultContent();
		browser.driver.sleep(2000);
		});
	
	/*it('logoutfroFeedback', function() {
		loginPage.logoutifloggedinearlier();		
		browser.driver.sleep(2000);
		});*/
	
});