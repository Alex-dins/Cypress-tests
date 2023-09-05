export class FileUploadPage {
    mainHeader() {
        return cy.get("h1");
    }

    fileInput() {
        return cy.get("#myFile");
    }

    submitButton() {
        return cy.get("#submit-button");
    }

    successMessage(expectedTxt) {
        cy.on("window:alert", (str) => {
            expect(str).contain(expectedTxt)
        })
        return this;
    }

    errorMessage(expectedTxt) {
        cy.on("window:alert", (str) => {
            expect(str).contain(expectedTxt)
        })
        return this;
    }
}

