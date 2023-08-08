/// <reference types = "Cypress" />

describe("Verify dropdown list", () => {

    before(() => {
        cy.visit("/");
        cy.selectedPage("#autocomplete-textfield");
    })

    it("should select specific product from list", () => {
        cy.get("h2").should("have.text", "Autocomplete TextField");
        cy.get("#shop-logo").should("be.visible");

        cy.get("#myInput").type("A");
        cy.get("#myInputautocomplete-list > *")
          .each(($el) => {
              const element = $el.text();
              const productToSelect = "Avacado";

              if (element === productToSelect) {
                  $el.trigger("click");
                  cy.get("#submit-button").click();
                  cy.url().should("contain", productToSelect);
              }
          })
    });
})
