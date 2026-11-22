describe('Logout', () => {

  it('Deve realizar logout', () => {

    cy.login()

    cy.visit('/logout')

    cy.url().should('eq', 'http://localhost:3000/')

  })

})