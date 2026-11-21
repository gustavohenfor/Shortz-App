Cypress.Commands.add('login', () => {

  cy.fixture('usuario').then((usuario) => {

    cy.visit('/login')

    cy.get('#login')
      .type(usuario.login)

    cy.get('#password')
      .type(usuario.password)

    cy.get('button[type="submit"]')
      .click()

    cy.url().should('include', '/feed')

  })

})