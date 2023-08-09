export class HomePage {
    goToContactUsPage() {
        cy.selectedPage("#contact-us");
        return this;
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
}