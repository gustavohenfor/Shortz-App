describe('Upload de vídeo', () => {

  beforeEach(() => {
    cy.login()
  })

  it('Deve acessar tela de upload', () => {

    cy.visit('/upload')

    cy.get('#title')
      .type('Vídeo Teste Cypress')

    cy.get('#description')
      .type('Descrição criada pelo Cypress')

    cy.get('#video')
      .selectFile('cypress/fixtures/video-1776900687372-896634133.mp4', { force: true })

    cy.get('#thumbnail')
      .selectFile('cypress/fixtures/profile-1-1775085803481-883946553.jpg', { force: true })

    cy.get('button[type="submit"]').first().click()

  })

})