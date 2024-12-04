/// <reference types="cypress" />



describe('visit Deel', () => {



    before(() => {

        cy.visit('https://devmvp.lightforth.org')
        cy.title().should('eq', 'LightForth')
        cy.location('protocol').should('eq', 'https:')
       // cy.reload({ timeout: 130000 })

    })


    it('it should visit LightForth site', () => {

        //cy.visit('/auth/login')
        cy.wait(2000)
        

    })


})