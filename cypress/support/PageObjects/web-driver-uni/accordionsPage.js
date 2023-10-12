export class AccordionsPage {
    mainHeader(expectedTxt) {
        return cy.get("h1").contains(expectedTxt);
    }

    lengthOfAccordions(amount) {
        return cy.get("div.col-lg-12").should("have.length", amount);
    }

    firstAccordion() {
        return cy.get("#manual-testing-accordion");
    }

    firstAccordionClass(attr, value) {
        return cy.get("#manual-testing-accordion").should(attr, value);
    }

    firstAccordionText(attr, value) {
        cy.get("p").eq(0).should(attr, value);
    }

    secondAccordionClass(attr, value) {
        return cy.get("#cucumber-accordion").should(attr, value);
    }

    secondAccordion() {
        return cy.get("#cucumber-accordion");
    }

    secondAccordionText(attr, value) {
        cy.get("p").eq(1).should(attr, value);
    }
}