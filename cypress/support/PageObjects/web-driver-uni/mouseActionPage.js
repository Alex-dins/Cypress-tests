export class MouseActionPage {
    mainHeader() {
        return cy.get("#main-header");
    }

    draggableElement() {
        return cy.get("#draggable");
    }

    droppableElement() {
        return cy.get("#droppable");
    }

}