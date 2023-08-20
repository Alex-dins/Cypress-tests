export class CheckboxesPage {

    mainHeader(expectedTxt) {
        return cy.get("h1").should("have.text", expectedTxt);
    }

    checkbox(option) {
        return cy.get("#checkboxes").find("input", option);
    }

    radioButton() {
        return cy.get("#radio-buttons").find("input");
    }
}