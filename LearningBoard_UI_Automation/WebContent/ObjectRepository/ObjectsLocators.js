module.exports = function() {
	this.userInput = element(by.id('userid'));
	this.passwordInput = element(by.id('password'));
	this.loginButton = element(by.xpath(".//*[@id='login-form']/div[3]/button"));
	this.iscSpace=element(by.xpath(".//*[@spacekey="+browser.params.spacekey+"]"));
	this.userName=element(by.xpath(".//*[@id='navitem-user']"));
}
