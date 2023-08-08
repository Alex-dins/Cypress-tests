Cypress.Commands.add("getByInput", (selector) => {
    cy.get(`input[${selector}]`);
});
Cypress.Commands.add("selectedPage", (selectedPage) => {
    cy.get(selectedPage)
      .invoke("removeAttr", "target")
      .click({force: true});
});
Cypress.Commands.add("getByValue", (selector) => {
    cy.get(`[value=${selector}]`);
});