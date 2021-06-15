/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://192.168.100.24/')
    })

    it('Elements visible in the Dom', () => {
        cy.get('.App-link')
            .should('exist')
            .should('be.visible')
            .should('have.text','Learn React')
    })

    it('H1 is visible in the Dom and have text: "Esto es una prueba numero 4"', () => {
        cy.get('h1')
            .should('exist')
            .should('be.visible')
            .should('have.text','Esto es una prueba numero 4')
    })
})
