/// <reference types = "Cypress" />
import {HomePage} from "../../support/PageObjects/web-driver-uni/homePage";
import {IFramePage} from "../../support/PageObjects/web-driver-uni/iFramePage";

const homePage = new HomePage();
const iFramePage = new IFramePage();

describe("Handling iframe and modals", () => {
    // Visit page http://webdriveruniversity.com/Popup-Alerts/index.html
    beforeEach(() => {
        homePage.goToIframePage();
    })

    it("Handle iframe and modals", () => {
        iFramePage.getIframeElement();
        iFramePage.findOutMoreButton().click();
        iFramePage.modalWindowContent().should("be.visible");
        iFramePage.getModalWindow();
        iFramePage.checkModalWindowText(
            "Welcome to webdriveruniversity.com we sell a wide range of electrical goods");
        iFramePage.modalWindowCloseButton().click();
        iFramePage.modalWindowContent().should("not.be.visible");
    });
});