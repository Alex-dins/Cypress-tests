export class MouseActionPage {
    mainHeader() {
        return cy.get("#main-header");
    }

    draggableElement() {
        return cy.get("#draggable");
    }

    droppableElement() {
        return cy.get("#droppable").as("dropPlace");
    }

    doubleClickElement() {
        return cy.get("#double-click");
    }

    clickAndHoldElement() {
        return cy.get("#click-box").trigger("mousedown", {which: 1})
    }

    expectedElementColor(color) {
        return this.clickAndHoldElement().then(($el) => {
            expect($el).to.have.css("background-color", color);
        });
    }

    firstHoverButton() {
        return cy.get("button.dropbtn").eq(0)
    }

    link1() {
        return cy.get("a.list-alert").contains("Link 1")
    }

    assertAlertWindowText(text) {
        cy.on("window:alert", (str) => {
            expect(str).to.eq(text);
        })
        return this;
    }
}