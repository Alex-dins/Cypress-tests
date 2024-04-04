export class AccordionsPage {

    locators = {
        mainHeader: "h1",
        accordionBlock: "div.col-lg-12",
        loadingText: "#hidden-text",
        accordionText: "p",
        accordions: {
            first:{
                firstAccordionButton: "#manual-testing-accordion",
            },
            second:{
                secondAccordionButton: "#cucumber-accordion",
            },
            third: {
                thirdAccordionButton: "automation-accordion"
            },
            fourth: {
                fourthAccordionButton: "#click-accordion",
                fourthAccordionText: "div[id='timeout']"
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
    }

//First Accordion
    firstAccordion() {
        return cy.get(this.locators.accordions.first.firstAccordionButton);
    }

    firstAccordionText() {
        return cy.get(this.locators.accordionText).eq(0);
    }

//Second Accordion
    secondAccordion() {
        return cy.get(this.locators.accordions.second.secondAccordionButton);
    }

    secondAccordionText() {
        return cy.get(this.locators.accordionText).eq(1);
    }

//Third Accordion
    thirdAccordion() {
        return cy.get(this.locators.accordions.third.thirdAccordionButton);
    }

    thirdAccordionText() {
        return cy.get(this.locators.accordionText).eq(2);
    }

// Fourth Accordion
    fourthAccordion() {
        return cy.get(this.locators.accordions.fourth.fourthAccordionButton);
    }

    waitForAccordion(time){
       return this.fourthAccordion().wait(time);
    }

    fourthAccordionText() {
        return cy.get(this.locators.accordions.fourth.fourthAccordionText);
    }
}