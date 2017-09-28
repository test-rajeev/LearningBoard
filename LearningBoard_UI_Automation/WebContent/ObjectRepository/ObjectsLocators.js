module.exports = function() {
	this.userInput=element(by.id('userid'));
	this.passwordInput=element(by.id('password'));
	this.loginButton=element(by.xpath(".//*[@id='login-form']/div[3]/button"));
	this.iscSpace=element(by.xpath(".//*[@spacekey="+browser.params.spacekey+"]"));
	this.userName=element(by.xpath(".//*[@id='navitem-user']"));
	
	this.hubDrpdwn= element(by.xpath(".//*[@id='CURRENT_APP_NAME']"));
//	drp_apprel=//div[@class='k-list-scroller']//ul[@id='MulSel_Portfolio_listbox']//li[text()='Agribusiness']
	this.hubItem= element(by.xpath(".//*[@id='__APP_MENU_ITEMS']/li[1]/a/div/div"));
	this.sysAdminItem= element(by.xpath(".//*[@id='__APP_MENU_ITEMS']/li[2]/a/div/div"));
	this.userManagementItem= element(by.xpath(".//*[@id='__APP_MENU_ITEMS']/li[7]/a/div/div"));

	
	this.welcomeText=element(by.xpath(".//*[@id='userWelcomeLink']/a/span[1]"));
	this.iframe1=element(by.id("appIFrame"));
	this.exitHelpOverlay=element(by.xpath("html/body/div[4]/div/div[5]/a[1]"));
	this.loginAsDrpDw=element(by.xpath(".//*[@id='userWelcomeLink']/a"));
	this.loginAsISCTeacher=element(by.xpath(".//*[@value="+browser.params.iscteacher+"]"));
	this.teacherName=element(by.id("navitem-user"));
	
	this.iframe2onHubCalander=element(by.id("appIFrame"));
	this.nextPageiconinCalander= element(by.xpath("html/body/div[1]/div/div/div/div[2]/div[1]/div[2]/i[3]"));
	this.paginationText= element(by.xpath("html/body/div[1]/div/div/div/div[2]/div[1]/div[2]/span"));
	
	// hub menu items in ISC teacher login-----------------
	this.wholehubcontainer= element(by.xpath(".//*[@id='bs-example-navbar-collapse-1']/div[2]"));
	this.foundationItem= element(by.xpath(".//*[@id='__APP_MENU_ITEMS']/li[2]/a/div/div"));
	this.feedbackItem= element(by.xpath(".//*[@id='__APP_MENU_ITEMS']/li[3]/a/div/div"));
	this.analysisItem= element(by.xpath(".//*[@id='__APP_MENU_ITEMS']/li[4]/a/div/div"));
	this.attendanceItem= element(by.xpath(".//*[@id='__APP_MENU_ITEMS']/li[5]/a/div/div"));
	
	this.helpoverlaysbttn= element(by.xpath("html/body/div[1]/div/div/div/div[1]/span[2]"));
	//this.helpoverlaysbttn= element(by.css('[ng-click="CallMe()"]'));
	this.loggedinuserInfo= element(by.xpath(".//*[@id='bs-example-navbar-collapse-1']/ul/li[3]/a/i"));
	this.logoutbttn= element(by.xpath(".//*[@id='logout']/a/span"));
	
	// feedback locators
	this.feedbackbttninHub= element(by.xpath("//div[@class='select_top selecttop_hide']//ul[@id='__APP_MENU_ITEMS']//div[text()='Feedback']"));
	this.CourseLabel= element(by.xpath("//div[@id='step1']//div[@class='form-group col-sm-3 col-md-12 col-md-nopad']//label[text()='Course']"));
	//this.CourseLabel= element(by.xpath(".//*[@id='step1']/form/div/div[1]/label"));
	this.Assessmenttypelbl= element(by.xpath("//div[@id='step2']//div[@class='form-group col-sm-3 col-md-12 col-md-nopad']//label[text()='Assessment type']"));
	//this.Assessmenttypelbl= element(by.xpath(".//*[@id='step2']/div[2]/label"));
	this.helpoverlaybttnOnFeedback = element(by.xpath("html/body/div[1]/div/div/div/div[2]/div[1]/span/span[1]"));
	
}
