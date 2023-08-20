/// <reference types = "Cypress" />
import {HomePage} from "../../support/PageObjects/web-driver-uni/homePage";
import {CheckboxesPage} from "../../support/PageObjects/web-driver-uni/checkboxesPage";

const homePage = new HomePage();
const checkboxesPage = new CheckboxesPage();

describe("Handle checkboxes", () => {
    beforeEach(() => {
        homePage.goToCheckboxesPage();
    })

    it("Validate and check checkboxes", () => {
        checkboxesPage.mainHeader("Dropdown Menu(s), Checkboxe(s) & Radio Button(s)");
        checkboxesPage.checkbox("option-3").should("be.checked");
        checkboxesPage.checkbox()
                      .check(["option-1", "option-2", "option-4"])
                      .should("be.checked");
    })

    it("Validate and check radio buttons", () => {
        checkboxesPage.radioButton().should("have.length", 5);
        checkboxesPage.radioButton().last().check().should("be.checked");
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
        cy.getByDropdownMenu("1").contains("JAVA");
        cy.getByDropdownMenu("1")
          .select("C#").should("have.value", "c#");
        //Assertion of the second dropdown menu
        cy.getByDropdownMenu("2").contains("Eclipse");
        cy.getByDropdownMenu("2")
          .select("TestNG").should("have.value", "testng");
        //Assertion of the third dropdown menu
        cy.getByDropdownMenu("3").contains("HTML");
        cy.getByDropdownMenu("3")
          .select("JavaScript").should("have.value", "javascript");
    })
})

