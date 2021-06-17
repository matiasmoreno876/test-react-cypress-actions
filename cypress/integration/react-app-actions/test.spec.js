/// <reference types="cypress" />

context('Test Elements visible in DOM', () => {
    beforeEach(() => {
        cy.visit('http://192.168.100.24/')
    })

    it('Link visible in the Dom and have text: "Learn React"', () => {
        cy.get('.App-link')
            .should('exist')
            .should('be.visible')
            .should('have.text','Learn React')
    })

    it('H1 is visible in the Dom and have text: "Esto es una prueba numero 4"', () => {
        cy.get('h1')
            .should('exist')
            .should('be.visible')
            .should('have.text','Esto es una prueba numero 5')
    })
})
