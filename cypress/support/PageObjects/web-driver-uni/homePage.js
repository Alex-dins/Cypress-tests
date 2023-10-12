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
        cy.visit("/");
        cy.get("#actions")
          .scrollIntoView()
          .invoke("removeAttr", "target")
          .click({force: true});
        return this;
    }

    goToFileUploadPage() {
        return cy.selectedPage("#file-upload");
    }

    goToAccordionsPage() {
        cy.visit("/");
        cy.get("div.col-md-12")
          .contains("ACCORDION & TEXT AFFECTS (APPEAR & DISAPPEAR)")
          .invoke("removeAttr", "target")
          .click({force: true});
        return this;
    }
}