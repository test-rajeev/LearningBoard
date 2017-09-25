module.exports = function() {
	// var obj=JSON.parse(fs.readFileSync('WebContent\Resources\testdata.json','utf8'));
	var EC = protractor.ExpectedConditions;

	this.waitForVisiblity = function(loc, ti) {
		browser.wait(EC.visibilityOf(loc), ti);
	};

	this.waitForClickable = function(loc, ti) {
		browser.wait(EC.elementToBeClickable(loc), ti);
	};

	this.waitForElementSelection = function(loc, ti) {
		browser.wait(EC.elementToBeSelected(loc), ti);
	};

	this.waitForPresence = function(loc, ti) {
		browser.wait(EC.presenceOf(loc), ti);
	};

};