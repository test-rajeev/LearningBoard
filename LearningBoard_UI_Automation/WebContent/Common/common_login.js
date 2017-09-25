var ObjectsLocators = require('../ObjectRepository/ObjectsLocators.js');
var objectslocators = new ObjectsLocators();

module.exports = function() {
	// var obj= JSON.parse(fs.readFileSync('WebContent\Resources\testdata.json','utf8'));
	var EC = protractor.ExpectedConditions;

	this.login = function(username, password) {
		browser.wait(EC.visibilityOf(objectslocators.loginButton), 3000).then(
				function() {
					objectslocators.userInput.sendKeys(username);
					objectslocators.passwordInput.sendKeys(password);
					objectslocators.loginButton.click();
				});
	};

	this.qawrkspce = function() {
		browser.wait(EC.visibilityOf(objectslocators.iscSpace), 3000).then(
				function() {
					objectslocators.iscSpace.click();
				});
	};
};