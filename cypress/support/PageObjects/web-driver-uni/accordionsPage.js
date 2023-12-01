export class AccordionsPage {
    mainHeader() {
        return cy.get("h1");
    }

    lengthOfAccordions() {
        return cy.get("div.col-lg-12").find("button");
    }

    loadingText(loadingTime = 0) {
        return cy.get("p[id='hidden-text']", {timeout: loadingTime});
    }

//First Accordion
    firstAccordion() {
        return cy.get("#manual-testing-accordion");
    }

    firstAccordionText() {
        return cy.get("p").eq(0);
    }

//Second Accordion

    secondAccordion() {
        return cy.get("#cucumber-accordion");
    }

    secondAccordionText() {
        return cy.get("p").eq(1);
    }

//Third Accordion

    thirdAccordion() {
        return cy.get("#automation-accordion");
    }

    thirdAccordionText() {
        return cy.get("p").eq(2);
    }

// Fourth Accordion
//     fourthAccordionClass() {
//         return cy.get("#click-accordion");
//     }

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