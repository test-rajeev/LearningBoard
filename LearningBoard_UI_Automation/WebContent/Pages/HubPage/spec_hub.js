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
		browser.driver.sleep(22000);
		expect(browser.driver.getCurrentUrl()).toContain("learningBoard.html");
		expect(objectslocators.welcomeText.getText()).toEqual("Welcome");
	});
	
	//---------------TestingLoginAs-------------------------//
	
	it('ExitHelpOverlays', function() {
		browser.switchTo().frame(objectslocators.iframe1.getWebElement());
		objectslocators.exitHelpOverlay.click();
		browser.driver.sleep(3000);
		browser.switchTo().defaultContent();
		expect(objectslocators.welcomeText.getText()).toEqual("Welcome");
	
		});
	
	it('VerifyHubforSupport', function() {
		objectslocators.hubDrpdwn.click();
		browser.driver.sleep(2000);
		expect(objectslocators.hubItem.getText()).toEqual(browser.params.hubitem);
		browser.driver.sleep(1000);
		expect(objectslocators.sysAdminItem.getText()).toEqual(browser.params.sysadminitem);
		browser.driver.sleep(1000);
		expect(objectslocators.userManagementItem.getText()).toEqual(browser.params.usermanagementitem);
		objectslocators.hubDrpdwn.click();
		browser.driver.sleep(2000);
	
		});
	
	
	it('HubLoginAs', function() {	
		objectslocators.loginAsDrpDw.click();
		browser.driver.sleep(3000);
		objectslocators.loginAsISCTeacher.click();
		browser.driver.sleep(15000);		
		expect(objectslocators.teacherName.getText()).toContain(browser.params.iscteachername);
	});
	
	//-------------- Testing pagination on calander for Asif Jehangir teacher -------------//
	it('CalanderPagination', function() {
		browser.switchTo().frame(objectslocators.iframe2onHubCalander.getWebElement());
		objectslocators.nextPageiconinCalander.click();
		browser.driver.sleep(3000);
				
		expect(objectslocators.paginationText.getText()).toContain(browser.params.paginationtext);
		browser.switchTo().defaultContent();
		});
	
	it('VerifyHubdropdownforISCteacher', function() {
		objectslocators.hubDrpdwn.click();
		browser.driver.sleep(2000);
				
		expect(objectslocators.foundationItem.getText()).toContain(browser.params.foundationitem);
		expect(objectslocators.feedbackItem.getText()).toContain(browser.params.feedbackitem);
		expect(objectslocators.analysisItem.getText()).toContain(browser.params.analysis);
		objectslocators.hubDrpdwn.click();
		browser.driver.sleep(2000);
	
		});
	
	it('VerifyHelpOverlays', function() {
		browser.switchTo().frame(objectslocators.iframe1.getWebElement());
		objectslocators.helpoverlaysbttn.click();
		browser.driver.sleep(3000);
		//browser.switchTo().frame(objectslocators.iframe1.getWebElement());
		objectslocators.exitHelpOverlay.click();
		browser.driver.sleep(3000);
		browser.switchTo().defaultContent();
		expect(objectslocators.welcomeText.getText()).toEqual("Welcome");
		});
	
});