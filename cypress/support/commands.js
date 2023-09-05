require("@4tw/cypress-drag-drop")
Cypress.Commands.add("getByInput", (selector) => {
    cy.get(`input[${selector}]`);
});
Cypress.Commands.add("selectedPage", (selectedPage) => {
    cy.visit("/");
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