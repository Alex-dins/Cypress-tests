/// <reference types = "Cypress" />
import {HomePage} from "../../support/PageObjects/web-driver-uni/homePage";
import {FileUploadPage} from "../../support/PageObjects/web-driver-uni/fileUploadPage";

const homePage = new HomePage();
const fileUploadPage = new FileUploadPage();

describe("Verifying uploading a file", () => {
    beforeEach(() => {
        homePage.goToFileUploadPage();
    })

    it("Successfully upload a file", () => {
        fileUploadPage.mainHeader().should("have.text", "File Upload");
        fileUploadPage.fileInput().selectFile("cypress/fixtures/laptop.png");
        fileUploadPage.submitButton().click();
        fileUploadPage.successMessage("Your file has now been uploaded!")
    })

    it("Uploading without a file", () => {
        fileUploadPage.submitButton().click();
        fileUploadPage.errorMessage("You need to select a file to upload!")
    })
})