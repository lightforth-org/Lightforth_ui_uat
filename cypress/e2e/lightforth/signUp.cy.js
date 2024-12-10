/// <reference types="cypress" />



describe('LightForth UI e2e', () => {
let randomNumber;


    before(() => {
        import("../../../pom/random.js").then((RandomNumberModule) => {
          randomNumber = new RandomNumberModule.default();
        });

        cy.visit('https://devmvp.lightforth.org/')
        cy.title().should('eq', 'LightForth')
        cy.location('protocol').should('eq', 'https:')
       // cy.reload({ timeout: 130000 })

    })


    it('it should Create Account without promo code', () => {
        cy.wait(2000)
        cy.signUp()
        cy.continueWithEmail()
        cy.InputNewEmail("bigRole" + randomNumber.number + "@yopmail.com")
        cy.AgreeToTerms()
        cy.submitEmail()
        cy.InputNewPassword('Password2024@')
        cy.confirmNewPassword('Password2024@')
        cy.CreateAccount()
        cy.VerifyAction('Now the magic begins!')
        cy.VerifyAction('Your Lightforth account has been created successfully')
        cy.gotoLoginPage()
        cy.VerifyAction('Verification link sent to your email')

    });

    it('it should Create Account without promo code', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.signUp()
        cy.continueWithEmail()
        cy.InputNewEmail("bigRole" + randomNumber.number + "@yopmail.com")
        cy.AgreeToTerms()
        cy.submitEmail()
        cy.InputNewPassword('Password2024@')
        cy.confirmNewPassword('Password2024@')
        cy.CreateAccount()
        cy.VerifyAction('The account already exists. Please try logging in or use the forgot password option if needed.')
        //cy.VerifyAction('Your Lightforth account has been created successfully')
        //cy.gotoLoginPage()
        //cy.VerifyAction('Verification link sent to your email')

    });


    it('it should not Create Account with non-existing promo code', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.signUp()
        cy.continueWithEmail()
       // cy.EnterReferalcode('bg40928400')
        cy.InputNewEmail("bigjams" + randomNumber.number + "@yopmail.com")
        cy.wait(3000)
        cy.AgreeToTerms()
        cy.submitEmail()
        cy.InputNewPassword('Password2024@')
        cy.confirmNewPassword('Password2024@')
        cy.CreateAccount()
        cy.VerifyAction('Now the magic begins!')
        cy.VerifyAction('Your Lightforth account has been created successfully')
        cy.gotoLoginPage()
        cy.VerifyAction('Verification link sent to your email')

    });

    it('it should not Create Account without email', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.signUp()
        cy.continueWithEmail()
        cy.EnterReferalcode('bg40928400')
        cy.AgreeToTerms()
        cy.submitEmail()
       cy.VerifyAction('Email is required')
    });

    it('it should not Create Account without email and promocode', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.signUp()
        cy.continueWithEmail()
        cy.AgreeToTerms()
        cy.submitEmail()
       cy.VerifyAction('Email is required')
    });


    it('it should not Create Account without main password', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.signUp()
        cy.continueWithEmail()
        cy.InputNewEmail("bigRole" + randomNumber.number + "@yopmail.com")
        cy.AgreeToTerms()
        cy.submitEmail()
        cy.confirmNewPassword('Password2024@')
        cy.CreateAccount()
        cy.VerifyAction('Password is required')
        cy.VerifyAction('Passwords does not match')
        cy.VerifyAction('Weak')
        

    });



    it('it should not Create Account without confirm password', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.signUp()
        cy.continueWithEmail()
        cy.InputNewEmail("bigRole" + randomNumber.number + "@yopmail.com")
        cy.AgreeToTerms()
        cy.submitEmail()
        cy.InputNewPassword('Password2024@')
        cy.CreateAccount()
        cy.VerifyAction('Password is required')

    });
   
    it('it should not Create Account without main and comfirm password', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.signUp()
        cy.continueWithEmail()
        cy.InputNewEmail("bigRole" + randomNumber.number + "@yopmail.com")
        cy.AgreeToTerms()
        cy.submitEmail()
        cy.CreateAccount()
        cy.VerifyAction('Password is required')
        cy.VerifyAction('Confirm Password is required')
        cy.VerifyAction('Weak')
        

    });



    it('it should not Create Account with password without cap letter', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.signUp()
        cy.continueWithEmail()
        cy.InputNewEmail("bigRole" + randomNumber.number + "@yopmail.com")
        cy.AgreeToTerms()
        cy.submitEmail()
        cy.InputNewPassword('password2024@')
        cy.confirmNewPassword('password2024@')
        cy.CreateAccount()
        cy.VerifyAction('Password must contain at least one uppercase letter')
    });


    it('it should not Create Account with password without special characters', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.signUp()
        cy.continueWithEmail()
        cy.InputNewEmail("bigRole" + randomNumber.number + "@yopmail.com")
        cy.AgreeToTerms()
        cy.submitEmail()
        cy.InputNewPassword('Password2024')
        cy.confirmNewPassword('Password2024')
        cy.CreateAccount()
        cy.VerifyAction('Password must contain at least one special character')
    });


    it('it should not Create Account with password without number', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.signUp()
        cy.continueWithEmail()
        cy.InputNewEmail("bigRole" + randomNumber.number + "@yopmail.com")
        cy.AgreeToTerms()
        cy.submitEmail()
        cy.InputNewPassword('Password@')
        cy.confirmNewPassword('Password@')
        cy.CreateAccount()
        cy.VerifyAction('Password must contain at least one number')
    });

    it('it should not Create Account with password less than 8 digit', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.signUp()
        cy.continueWithEmail()
        cy.InputNewEmail("bigRole" + randomNumber.number + "@yopmail.com")
        cy.AgreeToTerms()
        cy.submitEmail()
        cy.InputNewPassword('Pass@')
        cy.confirmNewPassword('Pass@')
        cy.CreateAccount()
        cy.VerifyAction('Password must be at least 8 characters')
    });







})