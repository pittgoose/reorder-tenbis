import {browser} from 'protractor';
import {TenBisPage} from "../ten-bis-page";
import * as fs from 'fs';
let tenBisPage = new TenBisPage;
export = function () {

    this.Given(/^I go to the 10bis website$/, () => {
        browser.waitForAngularEnabled(false);
        return tenBisPage.goToPage();

    });

    this.When(/^I log in with the stored credentials$/, () => {
        let credentials = JSON.parse(fs.readFileSync('./credentials.json').toString());
        return tenBisPage.login(credentials);
    });


    this.When(/^I reorder my last meal$/, () => {
        return tenBisPage.reorderLastMeal();
    });
};