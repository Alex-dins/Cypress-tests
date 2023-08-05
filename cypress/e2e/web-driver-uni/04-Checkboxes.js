/// <reference types = "Cypress" />

describe("Handle checkboxes", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.selectedPage("#dropdown-checkboxes-radiobuttons");
    })

    it("Validate and check checkboxes", () => {
        cy.get("h1").should("have.text", "Dropdown Menu(s), Checkboxe(s) & Radio Button(s)");
        cy.get("#checkboxes").find("input").eq(2).should("be.checked");
        cy.get("input[type='checkbox']")
          .check(["option-1", "option-2", "option-4"])
          .should("be.checked");
        cy.get("#radio-buttons").find("input").should("have.length", 5)
    })

    it("Validate and check radio buttons", () => {
        cy.get("h1").should("have.text", "Dropdown Menu(s), Checkboxe(s) & Radio Button(s)");
        cy.get("#radio-buttons").find("input").should("have.length", 5);
        cy.get("#radio-buttons").children().last().check().should("be.checked");
    })
})

