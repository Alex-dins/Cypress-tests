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

    firstHoverButton() {
        return cy.get("button.dropbtn").eq(0)
    }

    link1() {
        return cy.get("a.list-alert").contains("Link 1")
    }
}