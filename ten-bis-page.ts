import {element, by, ElementFinder, browser, ExpectedConditions as EC} from 'protractor';
export class TenBisPage {
    returningCustomerButton = element(by.css('[data-home-page-logon-button="true"]'));
    emailInput = element.all(by.css('[data-logon-popup-form-user-name-input="true"]')).first();
    passwordInput = element.all(by.css('[type="password"]')).first();
    submitLoginButton = element.all(by.css('.submitButton')).first();
    pastOrdersTab = element(by.cssContainingText('.singleTabDiv', 'הזמנה חוזרת'));
    firstReorderButton = element.all(by.css('[data-reorder-button="true"]')).first();
    orderConfirmationButton = element(by.id('orderConfirmationBtn'));
    submitOrderButton = element(by.css('.checkoutBtnLink.SubmitOrderBtn'));
    loadedElement = this.pastOrdersTab;

    waitForElement(element: ElementFinder) {
        return browser.wait(EC.visibilityOf(element), 10 * 1000);
    }

    login(credentials: { username, password }) {
        this.waitForElement(this.returningCustomerButton);
        this.returningCustomerButton.click();
        this.waitForElement(this.emailInput);
        this.emailInput.sendKeys(credentials.username);
        this.passwordInput.sendKeys(credentials.password);
        this.waitForElement(this.submitLoginButton);
        return this.submitLoginButton.click();
    }

    reorderLastMeal() {
        this.waitForElement(this.pastOrdersTab);
        this.pastOrdersTab.click();
        this.waitForElement(this.firstReorderButton);
        this.firstReorderButton.click();
        this.waitForElement(this.orderConfirmationButton);
        this.orderConfirmationButton.click();
        this.waitForElement(this.submitOrderButton);
        this.submitOrderButton.click();
        return browser.wait(EC.stalenessOf(this.submitOrderButton), 10 * 1000);
    }

    goToPage() {
        browser.get('https://www.10bis.co.il');
        this.waitForElement(this.returningCustomerButton);
    }
}