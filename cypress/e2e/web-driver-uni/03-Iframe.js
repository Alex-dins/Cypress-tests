/// <reference types = "Cypress" />

describe("Handling iframe and modals", () => {
    // Visit page http://webdriveruniversity.com/Popup-Alerts/index.html
    beforeEach(() => {
        cy.visit("/");
        cy.selectedPage("#iframe");
    })

    it("Handle iframe and modals", () => {
        cy.get("#frame").then(($iframe) => {
            const body = $iframe.contents().find("body");
            cy.wrap(body).as("iframe");
        });
        cy.get("@iframe").find("#button-find-out-more").click();
        cy.get("@iframe").find(".modal-content").should("be.visible");
        cy.get("@iframe").find("#myModal").as("modal");
        cy.get("@modal").should(($expectedText) => {
            const text = $expectedText.text();
            expect(text).to.include("Welcome to webdriveruniversity.com we sell a wide range of electrical goods");
        });
        cy.get("@modal").find("button").eq(1).click();
        cy.get("@iframe").find(".modal-content").should("not.be.visible");
    });
});