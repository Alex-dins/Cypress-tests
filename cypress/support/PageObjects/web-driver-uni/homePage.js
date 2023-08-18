export class HomePage {
    goToContactUsPage() {
        return cy.selectedPage("#contact-us");

    }

    goToAlertsPage() {
        return cy.selectedPage("#popup-alerts");
    }

    goToIframePage() {
        return cy.selectedPage("#iframe");
    }

    goToCheckboxesPage() {
        return cy.selectedPage("#dropdown-checkboxes-radiobuttons");
    }

    goToDropdownListPage() {
        return cy.selectedPage("#autocomplete-textfield");
    }

    goToMouseActionPage() {
        cy.get("#actions")
          .scrollIntoView()
          .invoke("removeAttr", "target")
          .click({force: true});
        return this;
    }
}