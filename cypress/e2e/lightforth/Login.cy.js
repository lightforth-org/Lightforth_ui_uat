/// <reference types="cypress" />



describe('LightForth UI e2e', () => {



    before(() => {

        cy.visit('https://devmvp.lightforth.org/')
        cy.title().should('eq', 'LightForth')
        cy.location('protocol').should('eq', 'https:')
       // cy.reload({ timeout: 130000 })

    })


    it('it should not login with non-existing user', () => {
        cy.wait(2000)
        cy.InputEmail('musa.femi@yopmail.com')
        cy.InputPassword('Password2024@')
        cy.submitButton()
        cy.VerifyAction('The account does not exist. Please check your details and try again.')
    });

    it('it should not login without email', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.InputPassword('Password2024@')
        cy.submitButton()
        cy.VerifyAction('Email is required')
    })


    it('it should not login without Password', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.InputEmail('musa.femi@yopmail.com')
        cy.submitButton()
        cy.VerifyAction('Password is required')
    })


    it('it should not login without email and Password', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.submitButton()
        cy.VerifyAction('Password is required')
        cy.VerifyAction('Email is required')
    })


})