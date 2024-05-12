export class IFramePage {

    locators = {
        findOutMoreButton: "#button-find-out-more",
        modalContent: ".modal-content",
        modalWindow: "#myModal"
    }

    getIframeElement() {
        return cy.get("#frame").its("0.contentDocument.body").then(cy.wrap);
        // Or we can use this approach:
        // cy.get("#frame").then(($iframe) => {
        //     const body = $iframe.contents().find("body");
        //     cy.wrap(body).as("iFrame");
        // });
        // return cy.get("@iFrame");
    }

    findOutMoreButton() {
        return this.getIframeElement().find(this.locators.findOutMoreButton);
    }

    modalWindowContent() {
        return this.getIframeElement().find(this.locators.modalContent)
    }

    getModalWindow() {
        return this.getIframeElement().find(this.locators.modalWindow);

    }

    modalWindowCloseButton() {
        return this.getModalWindow().find("button").eq(1)
    }

    checkModalWindowText(expectedText) {
        return this.getModalWindow().should(($expectedText) => {
            const text = $expectedText.text();
            expect(text).to.include(
                expectedText);
        });
    }
}

