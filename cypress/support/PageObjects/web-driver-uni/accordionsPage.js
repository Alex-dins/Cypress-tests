export class AccordionsPage {

    locators = {
        mainHeader: "h1",
        accordionBlock: "div.col-lg-12",
        loadingText: "#hidden-text",
        accordions: {
            first:{
                firstAccordionButton: "#manual-testing-accordion",
                firstAccordionText: "p"
            },
            second:{
                secondAccordionButton: "#cucumber-accordion",
                secondAccordionText: "p"
            },
        }

    }
    mainHeader() {
        return cy.get(this.locators.mainHeader);
    }

    lengthOfAccordions() {
        return cy.get(this.locators.accordionBlock).find("button");
    }

    loadingText() {
        return cy.get(this.locators.loadingText);
        // return cy.get("p[id='hidden-text']");
    }

//First Accordion
    firstAccordion() {
        return cy.get(this.locators.accordions.first.firstAccordionButton);
    }

    firstAccordionText() {
        return cy.get(this.locators.accordions.first.firstAccordionText).eq(0);
    }

//Second Accordion
    secondAccordion() {
        return cy.get(this.locators.accordions.second.secondAccordionButton);
    }

    secondAccordionText() {
        return cy.get(this.locators.accordions.second.secondAccordionText).eq(1);
    }

//Third Accordion
    thirdAccordion() {
        return cy.get("#automation-accordion");
    }

    thirdAccordionText() {
        return cy.get("p").eq(2);
    }

// Fourth Accordion
    fourthAccordion() {
        return cy.get("#click-accordion");
    }

    waitForAccordion(time){
       return this.fourthAccordion().wait(time);
    }

    fourthAccordionText() {
        return cy.get("div[id='timeout']");
    }
}