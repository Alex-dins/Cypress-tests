export class MouseActionPage {
    mainHeader(expectedTxt) {
        return cy.get("#main-header").contains(expectedTxt);
    }

    draggableElement() {
        return cy.get("#draggable");
    }

    droppableElement() {
        return cy.get("#droppable");
    }

}