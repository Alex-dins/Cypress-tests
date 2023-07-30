/// <reference types = "Cypress" />

describe('Test contact us form via WebDriverUni', () => {
    before(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#contact-us").invoke("removeAttr", "target").click({force: true});
    })

    it('Should be able to submit a successful submission via contact us form', () => {
cy.document().should("have.property", "charset").and("eq", "UTF-8")
    });
})