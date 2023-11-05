export class DropdownListPage {
    mainHeader() {
        return cy.get("h2");
    }

    logo() {
        return cy.get("#shop-logo");
    }

    inputField() {
        return cy.get("#myInput");
    }

    selectProductList(product) {
        return cy.get("#myInputautocomplete-list > *")
                 .each(($el) => {
                     if ($el.text().includes(product)) {
                         $el.trigger("click");
                     }
                 })
    }

    submitButton() {
        return cy.get("#submit-button");
    }

    url() {
        return cy.url();
    }
}