/// <reference types = "Cypress" />
import {HomePage} from "../../support/PageObjects/web-driver-uni/homePage";
import {MouseActionPage} from "../../support/PageObjects/web-driver-uni/mouseActionPage";

const homePage = new HomePage();
const mouseActionPage = new MouseActionPage();

describe("Test Mouse-actions", () => {
    beforeEach(() => {
        homePage.goToMouseActionPage();
    })

    it("Should be able drag and drop elements", () => {
        mouseActionPage.mainHeader("The Key to Success is to take massive ACTION!");
        mouseActionPage.draggableElement().find("b").should("have.text", "DRAG ME TO MY TARGET!");
        mouseActionPage.droppableElement().find("b").should("have.text", "DROP HERE!")
        mouseActionPage.draggableElement().drag("@dropPlace", {force: true});
        mouseActionPage.droppableElement().find("p")
                       .should("have.css", "background-color", "rgb(244, 89, 80)");
        mouseActionPage.droppableElement().find("b").should("have.text", "Dropped!");

    })
})