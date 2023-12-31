/// <reference types = "Cypress" />
import {ContactUsPage} from "../../support/PageObjects/web-driver-uni/contactUs";
import {HomePage} from "../../support/PageObjects/web-driver-uni/homePage";
import {ContactUsPageContent} from "../../support/PageContents/web-driver-uni/contactUsPageContent";

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
        homePage.goToContactUsPage();

    })
    // Successful submission
    it("Should be able to submit a successful submission via contact us form", () => {
        contactUsPage.checkMetaData();
        contactUsPage.header().should("have.text", ContactUsPageContent.headerText);
        contactUsPage.firstNameInput().should("have.attr", "placeholder", ContactUsPageContent.nameInputText);
        contactUsPage.firstNameInput().type(data.firstName);
        contactUsPage.lastNameInput().type(data.lastName);
        contactUsPage.emailInput().type(data.email);
        contactUsPage.commentInput().type(data.message);
        contactUsPage.submitButton().click();
        contactUsPage.successfulMessage().getMessageHeader()
                     .contains(ContactUsPageContent.successfulMessageText);
        contactUsPage.successfulMessage().getLoadingSpinner().should("be.visible");
    });
    // Unsuccessful submission
    it("Should not be able to submit a successful submission via contact us form as all fields are required",
        () => {
            contactUsPage.pathName().should("eq", "/Contact-Us/contactus.html")
            contactUsPage.firstNameInput().type(data.firstName);
            contactUsPage.lastNameInput().type(data.lastName);
            contactUsPage.commentInput().type(data.message);
            contactUsPage.submitButton().click();
            contactUsPage.errorMessage().contains(ContactUsPageContent.errorMessageText);
        });
})



