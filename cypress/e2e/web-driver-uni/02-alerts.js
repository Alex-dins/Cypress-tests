/// <reference types = "Cypress" />

describe('Handling js alerts', () => {
    // Visit page http://webdriveruniversity.com/
    beforeEach(() => {
        cy.visit(Cypress.env("baseUrl"));
        cy.selectedPage('#popup-alerts');
    })

    it('Confirm js alert contains the correct text', () => {
        cy.get("h1").should("have.text", "Annoying Popup & Alerts!");
        cy.get("#button1").click();
        cy.on("window:alert", (str) => {
            expect(str).to.eq("I am an alert box!")
        });
    });
});