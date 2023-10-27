export class ContactUsPage {

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

    pathName() {
        return cy.location("pathname");
    }
    
    getMessageHeader() {
        return cy.get("h1");
    }

    getLoadingSpinner() {
        return cy.get("#fountainG");
    }

    successfulMessage() {
        this.getMessageHeader();
        this.getLoadingSpinner();
        return this;
    }

    errorMessage() {
        return cy.get("body");
    }

    header() {
        return cy.get(".section_header");
    }

    checkMetaData() {
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
        cy.title().should("include", "WebDriver | Contact Us");
        cy.url().should("contain", "contactus");
        return this;
    }
}