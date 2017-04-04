"use strict";
var protractor_1 = require("protractor");
var ten_bis_page_1 = require("../ten-bis-page");
var fs = require("fs");
var tenBisPage = new ten_bis_page_1.TenBisPage;
module.exports = function () {
    this.Given(/^I go to the 10bis website$/, function () {
        protractor_1.browser.waitForAngularEnabled(false);
        return tenBisPage.goToPage();
    });
    this.When(/^I log in with the stored credentials$/, function () {
        var credentials = JSON.parse(fs.readFileSync('./credentials.json').toString());
        return tenBisPage.login(credentials);
    });
    this.When(/^I reorder my last meal$/, function () {
        return tenBisPage.reorderLastMeal();
    });
};
//# sourceMappingURL=reorder-steps.js.map