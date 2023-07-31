/// <reference types = "Cypress" />

describe('Test contact us form via WebDriverUni', () => {
    //Load data from fixtures
    before(() => {
        cy.fixture('credentials').then((data) => {
            globalThis.data = data;
        })
    })
    // Visit page http://webdriveruniversity.com/
    beforeEach(() => {
        cy.visit(Cypress.env("baseUrl"));
        cy.get("#contact-us")
          .invoke("removeAttr", "target")
          .click({force: true});
    })
    // Successful submission
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
        cy.title().should("include", "WebDriver | Contact Us");
        cy.url().should("contain", "contactus")
        cy.get(".section_header").should("have.text", "CONTACT US");

        cy.getByInput("first_name").type(data.firstName);
        cy.getByInput("first_name").should("have.attr", "placeholder", "First Name")
        cy.getByInput("last_name").type(data.lastName);
        cy.getByInput("email").type(data.email);
        cy.get("textarea[name='message']").type(data.message);
        cy.get("input[type='submit']").click();
        cy.get("h1").contains("Thank You for your Message!");
        cy.get("#fountainG").should("be.visible");
    });
})



