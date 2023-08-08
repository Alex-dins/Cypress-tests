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
    })

    it("Validate and check radio buttons", () => {
        cy.get("#radio-buttons").find("input").should("have.length", 5);
        cy.get("#radio-buttons")
          .children()
          .last()
          .check()
          .should("be.checked");
    })

    it("Validate the state of specific radio buttons", () => {
        cy.getByValue("lettuce").should("not.be.checked");
        cy.getByValue("cabbage").should("be.disabled");
        cy.getByValue("pumpkin").should("be.checked");
        cy.getByValue("lettuce").check();
        cy.getByValue("lettuce").should("be.checked");
        cy.getByValue("pumpkin").should("not.be.checked");
    })

    it("Validate and check dropdown menu", () => {
        //Assertion of the first dropdown menu
        cy.get("#dropdowm-menu-1").contains("JAVA");
        cy.get("#dropdowm-menu-1")
          .select("C#").should("have.value", "c#");
        //Assertion of the second dropdown menu
        cy.get("#dropdowm-menu-2").contains("Eclipse");
        cy.get("#dropdowm-menu-2")
          .select("TestNG").should("have.value", "testng");
        //Assertion of the third dropdown menu
        cy.get("#dropdowm-menu-3").contains("HTML");
        cy.get("#dropdowm-menu-3")
          .select("JavaScript").should("have.value", "javascript");
    })
})

