/**
 * Selects the support section from the sidebar menu.
 */
//method to input email for Login
Cypress.Commands.add('signUp', () => {
    return  cy.get('.text-gray-900 > .font-semibold').click()
})

Cypress.Commands.add('continueWithEmail', () => {
    return  cy.get("span[class='text-[#344054] font-medium text-sm']").click()
})

Cypress.Commands.add('InputNewEmail', (email) => {
    return  cy.get('#email').type(email)
})

Cypress.Commands.add('AgreeToTerms', () => {
    return  cy.get('.items-start > .flex > .relative').click()
})

Cypress.Commands.add('submitEmail', () => {
    return  cy.get('.transition-all').click()
})


Cypress.Commands.add('InputNewPassword', (Password) => {
    return  cy.get('#password').type(Password)
})

Cypress.Commands.add('confirmNewPassword', (Password) => {
    return  cy.get('#confirmPassword').type(Password)
})

Cypress.Commands.add('CreateAccount', () => {
    return  cy.get('.inline-flex').click()
})

Cypress.Commands.add('gotoLoginPage', () => {
    return   cy.get('.flex > .inline-flex').click()
})

Cypress.Commands.add('EnterReferalcode', (code) => {
    return   cy.get('#referralCode').type(code)
})



/*
//cy.get('.text-gray-900 > .font-semibold').click()
    //    cy.get("span[class='text-[#344054] font-medium text-sm']").click()
    //    cy.get('#email').type("bigRole12@yopmail.com")
      //  cy.get('.items-start > .flex > .relative').click()
      //  cy.get('.transition-all').click()
      //  cy.get('#password').type('Password2024@')
      //  cy.get('#confirmPassword').type('Password2024@')
        cy.get('.inline-flex').click()
        cy.contains('Now the magic begins!').should('be.visible')
        cy.get('.flex > .inline-flex').click()

        */