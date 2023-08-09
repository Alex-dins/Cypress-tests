/// <reference types = "Cypress" />
import {ContactUsPage} from "../../support/PageObjects/web-driver-uni/contactUs";
import {HomePage} from "../../support/PageObjects/web-driver-uni/homePage";

const contactUsPage = new ContactUsPage();
const homePage = new HomePage();

describe("Test contact us form via WebDriverUni", () => {
    //Load data from fixtures
    before(() => {
        cy.fixture("credentials").then((data) => {
            globalThis.data = data;
        })
    })
    // Visit page http://webdriveruniversity.com/Contact-Us/contactus.html
    beforeEach(() => {
        cy.visit("/");
        homePage.goToContactUsPage();
    })
    // Successful submission
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
        cy.title().should("include", "WebDriver | Contact Us");
        cy.url().should("contain", "contactus")
        cy.get(".section_header").should("have.text", "CONTACT US");

        contactUsPage.firstNameInput().type(data.firstName);
        contactUsPage.firstNameInput().should("have.attr", "placeholder", "First Name");
        contactUsPage.lastNameInput().type(data.lastName);
        contactUsPage.emailInput().type(data.email);
        contactUsPage.commentInput().type(data.message);
        contactUsPage.submitButton().click();
        cy.get("h1").contains("Thank You for your Message!");
        cy.get("#fountainG").should("be.visible");
    });
    // Unsuccessful submission
    it("Should not be able to submit a successful submission via contact us form as all fields are required",
        () => {
            cy.location("pathname").should("eq", "/Contact-Us/contactus.html")
            cy.getByInput("name=first_name").type(data.firstName);
            cy.getByInput("name=last_name").type(data.lastName);
            cy.get("textarea[name='message']").type(data.message);
            cy.getByInput("type=submit").click();
            cy.get("body").contains("Error: all fields are required");
        });
})



