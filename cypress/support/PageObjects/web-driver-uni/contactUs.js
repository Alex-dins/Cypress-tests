export class ContactUsPage {
    goToContactUsPage() {
        cy.visit("/");
        cy.selectedPage("#contact-us");
        return this;
    }

    firstNameInput() {
        return cy.getByInput("name=first_name");
    }

    lastNameInput() {
        return cy.getByInput("name=last_name");
    }

    emailInput() {
        return cy.getByInput("name=email");
    }

    commentInput() {
        return cy.get("textarea[name='message']");
    }

    submitButton() {
        return cy.getByInput("type=submit");
    }
}