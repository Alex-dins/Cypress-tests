export class AlertsPage {
    mainHeader() {
        return cy.get("h1");
    }

    alertClickMeButton() {
        return cy.get("#button1");
    }

    windowAlertText(expectedTxt) {
        cy.on("window:alert", (str) => {
            expect(str).to.eq(expectedTxt)
        });
        return this;
    }

    confirmBoxClickMeButton() {
        return cy.get("#button4");
    }

    windowAlertClickOk() {
        cy.on("window:confirm", () => {
            return true;
        });
        return this;
    }

    alertMessage() {
        return cy.get("#confirm-alert-text");
    }

    windowAlertClickCancel() {
        cy.on("window:confirm", () => {
            return false;
        });
        return this;
    }
}