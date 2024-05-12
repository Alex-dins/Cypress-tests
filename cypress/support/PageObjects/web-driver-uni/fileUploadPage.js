export class FileUploadPage {

    selectors = {
        "mainHeader": 'h1',
        "fileInput": '#myFile',
        "submitButton": '#submit-button'
    }

    mainHeader() {
        return cy.get(this.selectors.mainHeader);
    }

    fileInput() {
        return cy.get(this.selectors.fileInput);
    }

    submitButton() {
        return cy.get(this.selectors.submitButton);
    }

    message(expectedTxt) {
        cy.on("window:alert", (str) => {
            expect(str).contain(expectedTxt)
        })
        return this;
    }
}

