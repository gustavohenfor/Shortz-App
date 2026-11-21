describe('Cadastro de usuário', () => {

  it('Deve cadastrar um novo usuário', () => {

    cy.visit('/register')

    cy.get('#username')
      .type(`usuteste`)

    cy.get('#fullName')
      .type('Gustavo Henriqu')

    cy.get('#email')
      .type(`guhf@gmail.com`)

    cy.get('#password')
      .type('12345678')

    cy.get('#confirmPassword')
      .type('12345678')

    cy.get('button[type="submit"]')
      .click()

    cy.url().should('include', '/login')

  })

})