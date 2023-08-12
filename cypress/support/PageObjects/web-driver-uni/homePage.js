export class HomePage {
    goToContactUsPage() {
        cy.selectedPage("#contact-us");
        return this;
    }

    goToAlertsPage() {
        cy.selectedPage("#popup-alerts");
        return this;
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