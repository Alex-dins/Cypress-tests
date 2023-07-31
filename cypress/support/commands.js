Cypress.Commands.add("getByInput", (selector) => {
    cy.get(`input[${selector}]`);
    // cy.get(`input[name='${selector}']`);
});
Cypress.Commands.add("selectedPage", (selectedPage) => {
    cy.get(selectedPage)
      .invoke("removeAttr", "target")
      .click({force: true});
})