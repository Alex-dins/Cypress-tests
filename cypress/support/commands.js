Cypress.Commands.add("getByInput", (selector) => {
    cy.get(`input[name='${selector}']`);
});
