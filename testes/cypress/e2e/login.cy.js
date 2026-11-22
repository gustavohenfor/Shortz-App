describe('Login', () => {

  it('Deve realizar login', () => {

    cy.login()

    cy.url().should('include', '/feed')

  })

})