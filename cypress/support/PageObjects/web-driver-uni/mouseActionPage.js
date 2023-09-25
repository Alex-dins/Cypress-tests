export class MouseActionPage {
    mainHeader(expectedTxt) {
        return cy.get("#main-header").contains(expectedTxt);
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
}