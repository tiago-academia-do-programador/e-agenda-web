declare namespace Cypress {
  interface Chainable<Subject = any> {
    limparDados(): typeof limparDados;
    registrar(
      nome?: string,
      email?: string,
      senha?: string,
      loginAutomatico?: boolean): typeof registrar;
    logout(): typeof logout;
  }
}

function limparDados() {
  fetch('http://localhost:5000/api/testes/limpar')
    .then(() => console.log('Dados limpos no banco de dados'))
    .catch((err) => console.log('Falha ao limpar dados: ', err));
}

function registrar(
  nome: string = 'Teste',
  email: string = 'teste@cypress.com',
  senha: string = 'Teste@123',
  loginAutomatico: boolean = true,
) {
  cy.visit('/conta/registrar');

  cy.get('[data-cy=nome]')
    .type(nome);

  cy.get('[data-cy=email]')
    .type(email);

  cy.get('[data-cy=senha]')
    .type(senha);

  cy.get('[data-cy=confirmarSenha]')
    .type(senha);

  cy.get('[data-cy=btnRegistrar]')
    .click();

  if (!loginAutomatico)
    cy.logout();
}

function logout() {
  cy.contains('a', 'Sair')
    .click();

  cy.wait(500);
}

Cypress.Commands.add('limparDados', limparDados);
Cypress.Commands.add('registrar', registrar);
Cypress.Commands.add('logout', logout);
