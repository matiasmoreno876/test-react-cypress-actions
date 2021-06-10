/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Elements visible in the Dom', () => {
        cy.get('.App-link')
            .should('exist')
            .should('be.visible')
            .should('have.text','Learn React')
    })
})
