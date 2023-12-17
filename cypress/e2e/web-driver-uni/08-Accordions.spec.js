/// <reference types = "Cypress" />
import {HomePage} from "../../support/PageObjects/web-driver-uni/homePage";
import {AccordionsPage} from "../../support/PageObjects/web-driver-uni/accordionsPage";
import {AccordionPageContent} from "../../support/PageContents/web-driver-uni/accordionPageContent";

const homePage = new HomePage();
const accordionsPage = new AccordionsPage()
describe("Test accordions & text affects", () => {

    beforeEach(() => {
        homePage.goToAccordionsPage();
    })

    it("Assert elements on the page", () => {
        accordionsPage.mainHeader().contains(AccordionPageContent.headerText);
        accordionsPage.lengthOfAccordions().should("have.length", 4);
        //Verify state of Loading text
        accordionsPage.loadingText().should("have.text", AccordionPageContent.loadingTextWait);
        //After 5sec
        accordionsPage.loadingText(10000).should("have.text", AccordionPageContent.loadingTextComplete);
    });

    it("Should open first Accordion", () => {
        accordionsPage.firstAccordion().should("have.class", AccordionPageContent.accordions.first.inactiveClass);
        accordionsPage.firstAccordion().click();
        accordionsPage.firstAccordionText().contains(AccordionPageContent.accordions.first.text);
        accordionsPage.firstAccordion().should("have.class", AccordionPageContent.accordions.first.activeClass);
    });

    it("Should open second Accordion", () => {
        accordionsPage.secondAccordion().should("have.class", AccordionPageContent.accordions.second.inactiveClass);
        accordionsPage.secondAccordion().click();
        accordionsPage.secondAccordionText().contains(AccordionPageContent.accordions.second.text);
        accordionsPage.secondAccordion().should("have.class", AccordionPageContent.accordions.second.activeClass);
    });

    it("Should open third Accordion", () => {
        accordionsPage.thirdAccordion().should("have.class", AccordionPageContent.accordions.third.inactiveClass);
        accordionsPage.thirdAccordion().click();
        accordionsPage.thirdAccordionText().contains(AccordionPageContent.accordions.third.text);
        accordionsPage.thirdAccordion().should("have.class", AccordionPageContent.accordions.third.activeClass);
    });

    it("Should wait 5sec and open fourth Accordion", () => {
        accordionsPage.fourthAccordion().should("have.class", AccordionPageContent.accordions.fourth.inactiveClass);
        //Wait 5sec and click
        accordionsPage.waitForAccordion(10000)
        accordionsPage.fourthAccordion().click();
        accordionsPage.fourthAccordionText().contains(AccordionPageContent.accordions.fourth.text);
        accordionsPage.fourthAccordion().should("have.class", AccordionPageContent.accordions.fourth.activeClass);
    });

})