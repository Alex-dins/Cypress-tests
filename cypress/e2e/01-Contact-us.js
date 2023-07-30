/// <reference types = "Cypress" />

describe('Test contact us form via WebDriverUni', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("baseUrl"));
        cy.get("#contact-us")
          .invoke("removeAttr", "target")
          .click({force: true});
    })

    it('Should be able to submit a successful submission via contact us form', () => {
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
        cy.title().should("include", "WebDriver | Contact Us");
        cy.url().should("contain", "contactus")
        cy.get(".section_header").should("have.text", "CONTACT US");
    });
})



