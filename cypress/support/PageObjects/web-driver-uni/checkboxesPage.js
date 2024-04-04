export class CheckboxesPage {

    locators = {
        mainHeader: "h1",
        checkbox: "#checkboxes",
        radioButton: "#radio-buttons"
    }
    mainHeader() {
        return cy.get(this.locators.mainHeader);
    }

    checkbox(option) {
        return cy.get(this.locators.checkbox).find("input", option);
    }

    radioButton() {
        return cy.get(this.locators.checkbox).find("input");
    }
}