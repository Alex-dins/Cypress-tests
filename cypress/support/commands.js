require("@4tw/cypress-drag-drop")
import "cypress-real-events";

Cypress.Commands.add("getByInput", (selector) => {
    cy.get(`input[${selector}]`);
});
Cypress.Commands.add("selectedPage", (selectedPage) => {
    cy.visit("/");
    //Check if the link is live
    cy.get(selectedPage).then((link) => {
        cy.request(link.prop("href"))
          .its("status").should("eq", 200);
    });
    //Solution for Opening a new tab
    cy.get(selectedPage)
      .invoke("removeAttr", "target")
      .click({force: true});
});
Cypress.Commands.add("getByValue", (selector) => {
    cy.get(`[value=${selector}]`);
});
Cypress.Commands.add("getByDropdownMenu", (nbr) => {
    cy.get(`#dropdowm-menu-${nbr}`);
});