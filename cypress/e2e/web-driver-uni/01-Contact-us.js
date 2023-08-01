/// <reference types = "Cypress" />

describe('Test contact us form via WebDriverUni', () => {
    //Load data from fixtures
    before(() => {
        cy.fixture('credentials').then((data) => {
            globalThis.data = data;
        })
    })
    // Visit page http://webdriveruniversity.com/Contact-Us/contactus.html
    beforeEach(() => {
        cy.visit("/");
        cy.selectedPage('#contact-us');
    })
    // Successful submission
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
        cy.title().should("include", "WebDriver | Contact Us");
        cy.url().should("contain", "contactus")
        cy.get(".section_header").should("have.text", "CONTACT US");

        cy.getByInput("name=first_name").type(data.firstName);
        cy.getByInput("name=first_name").should("have.attr", "placeholder", "First Name")
        cy.getByInput("name=last_name").type(data.lastName);
        cy.getByInput("name=email").type(data.email);
        cy.get("textarea[name='message']").type(data.message);
        cy.getByInput("type=submit").click();
        cy.get("h1").contains("Thank You for your Message!");
        cy.get("#fountainG").should("be.visible");
    });
    // Unsuccessful submission
    it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
        cy.location("pathname").should("eq", "/Contact-Us/contactus.html")
        cy.getByInput("name=first_name").type(data.firstName);
        cy.getByInput("name=last_name").type(data.lastName);
        cy.get("textarea[name='message']").type(data.message);
        cy.getByInput("type=submit").click();
        cy.get("body").contains("Error: all fields are required");
    });
})



