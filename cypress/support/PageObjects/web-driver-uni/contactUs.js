export class ContactUsPage {

    locators = {
        firstname: "name=first_name",
        lastname: "name=last_name",
        email: "name=email",
        comment: "textarea[name='message']",
        submitButton: "type=submit",
        pathName: "pathname",
        messageHeader: "h1",
        loaderSpinner: "#fountainG",
        errorMessage: "body",
        sectionHeader: ".section_header"
    }
    firstNameInput() {
        return cy.getByInput(this.locators.firstname);
    }

    lastNameInput() {
        return cy.getByInput(this.locators.lastname);
    }

    emailInput() {
        return cy.getByInput(this.locators.email);
    }

    commentInput() {
        return cy.get(this.locators.comment);
    }

    submitButton() {
        return cy.getByInput(this.locators.submitButton);
    }

    pathName() {
        return cy.location(this.locators.pathName);
    }
    
    getMessageHeader() {
        return cy.get(this.locators.messageHeader);
    }

    getLoadingSpinner() {
        return cy.get(this.locators.loaderSpinner);
    }

    successfulMessage() {
        this.getMessageHeader();
        this.getLoadingSpinner();
        return this;
    }

    errorMessage() {
        return cy.get(this.locators.errorMessage);
    }

    header() {
        return cy.get(this.locators.sectionHeader);
    }

    checkMetaData() {
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
        cy.title().should("include", "WebDriver | Contact Us");
        cy.url().should("contain", "contactus");
        return this;
    }
}