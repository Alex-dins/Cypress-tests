export class DropdownListPage {
    mainHeader(expectedTxt) {
        return cy.get("h2").should("have.text", expectedTxt);
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