describe('Primeiro Acesso do Usuário', () => {
  it('Deve redirecionar para autenticação', () => {
    cy.visit('/');

    cy.wait(100);

    cy.url().should('contain', 'conta/autenticar')
  });
})
