export class IFramePage {
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
        return this.getIframeElement().find("#button-find-out-more");
    }

    modalWindowContent() {
        return this.getIframeElement().find(".modal-content")
    }

    getModalWindow() {
        return this.getIframeElement().find("#myModal");

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

