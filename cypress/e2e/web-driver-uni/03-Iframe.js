/// <reference types = "Cypress" />

describe('Handling iframe and modals', () => {
    // Visit page http://webdriveruniversity.com/Popup-Alerts/index.html
    beforeEach(() => {
        cy.visit("/");
        cy.selectedPage('##iframe');
    })

    it('Handle iframe and modals', () => {
        cy.get("#frame").then(($iframe) => {
            const body = $iframe.contents().find("body");
            cy.wrap(body).as("iframe");
        })

    });

});