export class AlertsPage {

    locators = {
        mainHeader: 'h1',
        alertClickMeButton: '#button1',
        confirmButton: '#button4',
        alertMessage: '#confirm-alert-text'
    }
    mainHeader() {
        return cy.get(this.locators.mainHeader);
    }

    alertClickMeButton() {
        return cy.get(this.locators.alertClickMeButton);
    }

    windowAlertText(expectedText) {
        return cy.on('window:alert', (text) => {
            expect(text).to.eq(expectedText);
        });
    }

    confirmBoxClickMeButton() {
        return cy.get(this.locators.confirmButton);
    }

    windowAlertClickOk() {
        cy.on("window:confirm", () => {
            return true;
        });
        return this;
    }

    alertMessage() {
        return cy.get(this.locators.alertMessage);
    }

    windowAlertClickCancel() {
        cy.on("window:confirm", () => {
            return false;
        });
        return this;
    }
}