/// <reference types = "Cypress" />

describe('Handling js alerts', () => {
    // Visit page http://webdriveruniversity.com/Popup-Alerts/index.html
    beforeEach(() => {
        cy.visit("/");
        cy.selectedPage('#popup-alerts');
    })

    it('Confirm js alert contains the correct text', () => {
        cy.get("h1").should("have.text", "Annoying Popup & Alerts!");
        cy.get("#button1").click();
        cy.on("window:alert", (str) => {
            expect(str).to.eq("I am an alert box!")
        });
    });

    it('Confirm js alert when clicking ok', () => {
        cy.get("#button4").click();
        cy.on("window:confirm", () => {
            return true;
        });
        cy.get("#confirm-alert-text").contains("You pressed OK!");
    })

    it('Confirm js alert when clicking cancel', () => {
        cy.get("#button4").click();
        cy.on("window:confirm", () => {
            return false;
        });
        cy.get("#confirm-alert-text").contains("You pressed Cancel!");
    })
});