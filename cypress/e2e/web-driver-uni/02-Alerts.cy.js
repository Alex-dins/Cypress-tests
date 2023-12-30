/// <reference types = "Cypress" />
import {HomePage} from "../../support/PageObjects/web-driver-uni/homePage";
import {AlertsPage} from "../../support/PageObjects/web-driver-uni/alertsPage";
import {AlertsPageContent} from "../../support/PageContents/web-driver-uni/alertsPageContent";

const homePage = new HomePage();
const alertPage = new AlertsPage();


describe("Handling js alerts", () => {
    // Visit page http://webdriveruniversity.com/Popup-Alerts/index.html
    beforeEach(() => {
        homePage.goToAlertsPage();
    })

    it("Confirm js alert contains the correct text", () => {
        alertPage.mainHeader().should("have.text", AlertsPageContent.headerText);
        alertPage.alertClickMeButton().click();
        alertPage.windowAlertText(AlertsPageContent.alertText);
    });

    it("Confirm js alert when clicking ok", () => {
        alertPage.confirmBoxClickMeButton().click();
        alertPage.windowAlertClickOk();
        alertPage.alertMessage().contains(AlertsPageContent.alertTextPressOk);
    })

    it("Confirm js alert when clicking cancel", () => {
        alertPage.confirmBoxClickMeButton().click();
        alertPage.windowAlertClickCancel();
        alertPage.alertMessage().contains(AlertsPageContent.alertTextPressCancel);
    })
});