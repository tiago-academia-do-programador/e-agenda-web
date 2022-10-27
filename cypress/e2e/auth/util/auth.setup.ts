class AuthSetup {
  obterFormRegistro() {
    return {
      nome: () => cy.get('[data-cy=nome]'),
      email: () => cy.get('[data-cy=email]'),
      senha: () => cy.get('[data-cy=senha]'),
      confirmarSenha: () => cy.get('[data-cy=confirmarSenha]'),
      btnRegistrar: () => cy.get('[data-cy=btnRegistrar]'),
    }
  }
}

export default new AuthSetup();
