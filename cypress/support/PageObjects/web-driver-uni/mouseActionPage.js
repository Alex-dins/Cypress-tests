export class MouseActionPage {

    locators = {
        mainHeader: "#main-header",
        draggableElement: "#draggable",
        droppableElement: "#droppable",
        doubleClickBox: "#double-click",
        clickAndHoldBox: "#click-box",
        hoverButton: "button.dropbtn",
        link: "a.list-alert"
    }

    mainHeader() {
        return cy.get(this.locators.mainHeader);
    }

    draggableElement() {
        return cy.get(this.locators.draggableElement);
    }

    droppableElement() {
        return cy.get(this.locators.droppableElement).as("dropPlace");
    }

    doubleClickElement() {
        return cy.get(this.locators.doubleClickBox);
    }

    clickAndHoldElement() {
        return cy.get(this.locators.clickAndHoldBox).trigger("mousedown", {which: 1})
    }

    expectedElementColor(color) {
        return this.clickAndHoldElement().then(($el) => {
            expect($el).to.have.css("background-color", color);
        });
    }

    firstHoverButton() {
        return cy.get(this.locators.hoverButton).eq(0)
    }

    link1() {
        return cy.get(this.locators.link).contains("Link 1")
    }

    assertAlertWindowText(text) {
        cy.on("window:alert", (str) => {
            expect(str).to.eq(text);
        })
        return this;
    }
}