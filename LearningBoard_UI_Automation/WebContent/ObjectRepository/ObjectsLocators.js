module.exports = function() {
	this.userInput=element(by.id('userid'));
	this.passwordInput=element(by.id('password'));
	this.loginButton=element(by.xpath(".//*[@id='login-form']/div[3]/button"));
	this.iscSpace=element(by.xpath(".//*[@spacekey="+browser.params.spacekey+"]"));
	this.userName=element(by.xpath(".//*[@id='navitem-user']"));
	
	this.welcomeText=element(by.xpath(".//*[@id='userWelcomeLink']/a/span[1]"));
	this.iframe1=element(by.id("appIFrame"));
	this.exitHelpOverlay=element(by.xpath("html/body/div[4]/div/div[5]/a[1]"));
	this.loginAsDrpDw=element(by.xpath(".//*[@id='userWelcomeLink']/a"));
	this.loginAsISCTeacher=element(by.xpath(".//*[@value="+browser.params.iscteacher+"]"));
	this.teacherName=element(by.id("navitem-user"));
	
	this.iframe2onHubCalander=element(by.id("appIFrame"));
	this.nextPageiconinCalander= element(by.xpath("html/body/div[1]/div/div/div/div[2]/div[1]/div[2]/i[3]"));
	this.paginationText= element(by.xpath("html/body/div[1]/div/div/div/div[2]/div[1]/div[2]/span"));
}
