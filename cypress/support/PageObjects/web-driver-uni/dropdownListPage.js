export class DropdownListPage {

    locators = {
        header: "h2",
        logo: "#shop-logo",
        inputField: "#myInput",
        dropdownList: "#myInputautocomplete-list > *",
        submitButton: "#submit-button"
    }
    mainHeader() {
        return cy.get(this.locators.header);
    }

    logo() {
        return cy.get(this.locators.logo);
    }

    inputField() {
        return cy.get(this.locators.inputField);
    }

    selectProductList(product) {
        return cy.get(this.locators.dropdownList)
                 .each(($el) => {
                     if ($el.text().includes(product)) {
                         $el.trigger("click");
                     }
                 })
    }

    submitButton() {
        return cy.get(this.locators.submitButton);
    }

    url() {
        return cy.url();
    }
}