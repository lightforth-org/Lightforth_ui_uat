/**
 * Selects the support section from the sidebar menu.
 */
//method to input email for Login
Cypress.Commands.add('InputEmail', (email) => {
    return cy.get('#email').type(email)
})


//method to input password for Login
Cypress.Commands.add('InputPassword', (Password) => {
    return cy.get('#password').type(Password)
})



//method to click on submit button Login
Cypress.Commands.add('submitButton', () => {
    return cy.get('form > .inline-flex').click() 
})



