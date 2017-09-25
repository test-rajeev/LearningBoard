var configurationFile = require('../Resources/testdata.json');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
	params : configurationFile,
	framework : 'jasmine',
	seleniumAddress : 'http://localhost:4444/wd/hub',
	//specs : [ 'spec_login.js' ],
	
	suites: {
	      login: '../Pages/LoginPage/spec_login.js',
	      hub: '../Pages/HubPage/spec_hub.js'
	    },
	    
	jasmineNodeOpts : {
		showColors : true,
		defaultTimeoutInterval : 800000
	},
	
	onPrepare : function() {
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath : 'WebContent/Reports/total',
			screenshotsFolder : 'images',
			 takeScreenshotsOnlyOnFailures:true,
			fixedScreenshotName : true,

		}));
		browser.driver.manage().window().maximize();
	}
}