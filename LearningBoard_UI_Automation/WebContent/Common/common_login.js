var ObjectsLocators = require('../ObjectRepository/ObjectsLocators.js');
var CommonWait = require('../Common/common_wait.js');

var objectslocators = new ObjectsLocators();
var commonwait= new CommonWait();

module.exports = function() {
	// var obj= JSON.parse(fs.readFileSync('WebContent\Resources\testdata.json','utf8'));
	var EC = protractor.ExpectedConditions;

	this.login = function(username, password) {
		browser.wait(EC.visibilityOf(objectslocators.loginButton), 3000).then(
				function() {
					objectslocators.userInput.sendKeys(username);
					objectslocators.passwordInput.sendKeys(password);
					objectslocators.loginButton.click();
					//commonwait.waitForPresence(objectslocators.iscSpace,5000);
				});
	};

	this.qawrkspce = function() {
		if(browser.params.multiplespace==1){
		browser.wait(EC.visibilityOf(objectslocators.iscSpace), 3000).then(
				function() {
					objectslocators.iscSpace.click();
					//commonwait.waitForVisiblity(objectslocators.welcomeText,5000);
				});
	};
  }
	
	this.switchIFrame = function(loc) {
		browser.switchTo().frame(loc.getWebElement());
  }
	
};