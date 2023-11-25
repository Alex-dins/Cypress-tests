/// <reference types = "Cypress" />
import {HomePage} from "../../support/PageObjects/web-driver-uni/homePage";
import {AccordionsPage} from "../../support/PageObjects/web-driver-uni/accordionsPage";

const homePage = new HomePage();
const accordionsPage = new AccordionsPage()
describe("Test accordions & text affects", () => {

    beforeEach(() => {
        homePage.goToAccordionsPage();
    })

    it("Assert elements on the page", () => {
        accordionsPage.mainHeader().contains("Click on One of the Accordian Items Below!");
        accordionsPage.lengthOfAccordions().should("have.length", 4);
        //Verify state of Loading text
        accordionsPage.loadingText().should("have.text", "LOADING.. PLEASE WAIT..");
        //After 5sec
        accordionsPage.loadingText(10000).should("have.text", "LOADING COMPLETE.");
    });

    it("Should open first Accordion", () => {
        accordionsPage.firstAccordionClass().should("have.class", "accordion");
        accordionsPage.firstAccordion().click();
        accordionsPage.firstAccordionText().contains("Manual testing has for some time");
        accordionsPage.firstAccordionClass().should("have.class", "accordion active");
    });

    it("Should open second Accordion", () => {
        accordionsPage.secondAccordionClass().should("have.class", "accordion");
        accordionsPage.secondAccordion().click();
        accordionsPage.secondAccordionText().contains("Cucumber (BDD) simplifies the requirement");
        accordionsPage.secondAccordionClass().should("have.class", "accordion active");
    });

    it("Should open third Accordion", () => {
        accordionsPage.thirdAccordionClass().should("have.class", "accordion");
        accordionsPage.thirdAccordion().click();
        accordionsPage.thirdAccordionText().contains("Automation testing has been steadily grown");
        accordionsPage.thirdAccordionClass().should("have.class", "accordion active");
    });

    it("Should wait 5sec and open fourth Accordion", () => {
        accordionsPage.fourthAccordionClass().should("have.class", "accordion");
        //Wait 5sec and click
        accordionsPage.fourthAccordion().click();
        accordionsPage.fourthAccordionText().contains("This text has appeared after 5 seconds!");
        accordionsPage.fourthAccordionClass().should("have.class", "accordion active");
    });

})