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
        accordionsPage.mainHeader("Click on One of the Accordian Items Below!");
        accordionsPage.lengthOfAccordions(4);
    });

    it("Should open first Accordion", () => {
        accordionsPage.firstAccordionClass("have.class", "accordion");
        accordionsPage.firstAccordion().click();
        accordionsPage.firstAccordionText("have.text", "Manual testing has for some time");
        accordionsPage.firstAccordionClass("have.class", "accordion active");
    });

    it("Should open second Accordion", () => {
        accordionsPage.secondAccordionClass("have.class", "accordion");
        accordionsPage.secondAccordion().click();
        accordionsPage.secondAccordionText("have.text",
            "Cucumber (BDD) simplifies the requirement");
        accordionsPage.secondAccordionClass("have.class", "accordion active");
    });


})