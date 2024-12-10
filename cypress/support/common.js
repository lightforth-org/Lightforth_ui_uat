//method to verify
Cypress.Commands.add('VerifyAction', (value) => {
    return cy.contains(value).should('be.visible') 
})
