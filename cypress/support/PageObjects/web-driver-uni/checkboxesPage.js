export class CheckboxesPage {

    mainHeader() {
        return cy.get("h1");
    }

    checkbox(option) {
        return cy.get("#checkboxes").find("input", option);
    }

    radioButton() {
        return cy.get("#radio-buttons").find("input");
    }
}