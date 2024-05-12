/// <reference types = "Cypress" />
import {HomePage} from "../../support/PageObjects/web-driver-uni/homePage";
import {FileUploadPage} from "../../support/PageObjects/web-driver-uni/fileUploadPage";
import {FileUploadPageContent} from "../../support/PageContents/web-driver-uni/fileUplodPageContent";

const homePage = new HomePage();
const fileUploadPage = new FileUploadPage();

describe("Verifying uploading a file", () => {
    beforeEach(() => {
        homePage.goToFileUploadPage();
    })

    it("Successfully upload a file", () => {
        fileUploadPage.mainHeader().should("have.text", FileUploadPageContent.headerText);
        fileUploadPage.fileInput().selectFile("cypress/fixtures/laptop.png");
        fileUploadPage.submitButton().click();
        fileUploadPage.message(FileUploadPageContent.successfulMessageText)
    })

    it("Uploading without a file", () => {
        fileUploadPage.submitButton().click();
        fileUploadPage.message(FileUploadPageContent.errorMessageText)
    })
})