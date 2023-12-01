/// <reference types = "Cypress" />
import {HomePage} from "../../support/PageObjects/web-driver-uni/homePage";
import {DropdownListPage} from "../../support/PageObjects/web-driver-uni/dropdownListPage";

const homePage = new HomePage();
const dropdownListPage = new DropdownListPage();
describe("Verify dropdown list", () => {

    before(() => {
        homePage.goToDropdownListPage();
    })

    it("should select specific product from list", () => {
        dropdownListPage.mainHeader().should("have.text", "Autocomplete TextField");
        dropdownListPage.logo().should("be.visible");
        dropdownListPage.inputField().type("A");
        dropdownListPage.selectProductList("Avacado");
        dropdownListPage.submitButton().click();
        dropdownListPage.url().should("contain", "Avacado");
    });
})
