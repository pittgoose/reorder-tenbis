"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var TenBisPage = (function () {
    function TenBisPage() {
        this.returningCustomerButton = protractor_1.element(protractor_1.by.css('[data-home-page-logon-button="true"]'));
        this.emailInput = protractor_1.element.all(protractor_1.by.css('[data-logon-popup-form-user-name-input="true"]')).first();
        this.passwordInput = protractor_1.element.all(protractor_1.by.css('[type="password"]')).first();
        this.submitLoginButton = protractor_1.element.all(protractor_1.by.css('.submitButton')).first();
        this.pastOrdersTab = protractor_1.element(protractor_1.by.cssContainingText('.singleTabDiv', 'הזמנה חוזרת'));
        this.firstReorderButton = protractor_1.element.all(protractor_1.by.css('[data-reorder-button="true"]')).first();
        this.orderConfirmationButton = protractor_1.element(protractor_1.by.id('orderConfirmationBtn'));
        this.submitOrderButton = protractor_1.element(protractor_1.by.css('.checkoutBtnLink.SubmitOrderBtn'));
        this.loadedElement = this.pastOrdersTab;
    }
    TenBisPage.prototype.waitForElement = function (element) {
        return protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(element), 10 * 1000);
    };
    TenBisPage.prototype.login = function (credentials) {
        this.waitForElement(this.returningCustomerButton);
        this.returningCustomerButton.click();
        this.waitForElement(this.emailInput);
        this.emailInput.sendKeys(credentials.username);
        this.passwordInput.sendKeys(credentials.password);
        this.waitForElement(this.submitLoginButton);
        return this.submitLoginButton.click();
    };
    TenBisPage.prototype.reorderLastMeal = function () {
        this.waitForElement(this.pastOrdersTab);
        this.pastOrdersTab.click();
        this.waitForElement(this.firstReorderButton);
        this.firstReorderButton.click();
        this.waitForElement(this.orderConfirmationButton);
        this.orderConfirmationButton.click();
        this.waitForElement(this.submitOrderButton);
        this.submitOrderButton.click();
        return protractor_1.browser.wait(protractor_1.ExpectedConditions.stalenessOf(this.submitOrderButton), 10 * 1000);
    };
    TenBisPage.prototype.goToPage = function () {
        protractor_1.browser.get('https://www.10bis.co.il');
        this.waitForElement(this.returningCustomerButton);
    };
    return TenBisPage;
}());
exports.TenBisPage = TenBisPage;
//# sourceMappingURL=ten-bis-page.js.map