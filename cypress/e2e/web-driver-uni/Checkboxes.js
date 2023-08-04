/// <reference types = "Cypress" />

describe("Handle checkboxes", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.selectedPage("#dropdown-checkboxes-radiobuttons");
    })

    it("Validate and check checkboxes", () => {
        cy.get("h1").should("have.text", "Dropdown Menu(s), Checkboxe(s) & Radio Button(s)");
    })
})

