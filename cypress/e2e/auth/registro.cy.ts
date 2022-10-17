describe('Processo de Registro do Usuário', () => {

  beforeEach(() => {
    cy.visit('conta/registrar');
  });

  it('Deve carregar a página', () => {
    cy.title().should('contain', 'Registro - e-Agenda');
  });

  it('Deve notificar sobre formulário inválido', () => {
    // Arrange
    const inputNome = cy.get('[formControlName=nome]');
    const inputEmail = cy.get('[formControlName=email]');
    const inputSenha = cy.get('[formControlName=senha]');
    const inputConfirmarSenha = cy.get('[formControlName=confirmarSenha]');
    const btnRegistrar = cy.get('button[type=submit]');

    // Act
    inputNome.type('Testes Cypress');
    inputEmail.type('testador@cypress.com');
    inputSenha.type('Teste');
    inputConfirmarSenha.type('Teste');
    btnRegistrar.click();

    cy.wait(300);

    // Assert
    cy.contains('Por favor preencha o formulário corretamente antes de prosseguir.');
  });

  // it('Deve registrar e redirecionar novo usuário', () => {
  //   // Arrange
  //   const inputNome = cy.get('[formControlName=nome]');
  //   const inputEmail = cy.get('[formControlName=email]');
  //   const inputSenha = cy.get('[formControlName=senha]');
  //   const inputConfirmarSenha = cy.get('[formControlName=confirmarSenha]');
  //   const btnRegistrar = cy.get('button[type=submit]');

  //   // Act
  //   inputNome.type('Testes Cypress 2');
  //   inputEmail.type('testador2@cypress.com');
  //   inputSenha.type('Teste@123');
  //   inputConfirmarSenha.type('Teste@123');
  //   btnRegistrar.click();

  //   // Assert
  //   cy.wait(1000);
  //   cy.url().should('contain', 'dashboard');
  // });

  it('Deve notificar sobre usuário repetido', () => {
    // Arrange
    const inputNome = cy.get('[formControlName=nome]');
    const inputEmail = cy.get('[formControlName=email]');
    const inputSenha = cy.get('[formControlName=senha]');
    const inputConfirmarSenha = cy.get('[formControlName=confirmarSenha]');
    const btnRegistrar = cy.get('button[type=submit]');

    // Act
    inputNome.type('Testes Cypress');
    inputEmail.type('testador@cypress.com');
    inputSenha.type('Teste@123');
    inputConfirmarSenha.type('Teste@123');
    btnRegistrar.click();

    cy.wait(300);

    cy.contains("Login 'testador@cypress.com' já está sendo utilizado.");
  });

  it('Deve notificar sobre senhas diferentes', () => {
    // Arrange
    const inputNome = cy.get('[formControlName=nome]');
    const inputEmail = cy.get('[formControlName=email]');
    const inputSenha = cy.get('[formControlName=senha]');
    const inputConfirmarSenha = cy.get('[formControlName=confirmarSenha]');
    const btnRegistrar = cy.get('button[type=submit]');

    // Act
    inputNome.type('Testes Cypress 3');
    inputEmail.type('testador3@cypress.com');
    inputSenha.type('Testes@123');
    inputConfirmarSenha.type('Teste@123');
    btnRegistrar.click();

    // Assert
    cy.wait(300);

    cy.contains('As senhas não conferem');
  });

  it('Deve validar nome vazio', () => {
    const inputNome = cy.get('[formControlName=nome]');
    const inputEmail = cy.get('[formControlName=email]');

    inputNome.focus();
    inputEmail.focus();

    cy.contains('O nome precisa ser preenchido.');
  });

  it('Deve validar nome curto', () => {
    const inputNome = cy.get('[formControlName=nome]');
    const inputEmail = cy.get('[formControlName=email]');

    inputNome.type('12');
    inputEmail.focus();

    cy.contains('O nome deve ter no mínimo 3 caracteres.');
  });

  it('Deve validar email vazio', () => {
    const inputEmail = cy.get('[formControlName=email]');
    const inputSenha = cy.get('[formControlName=senha]');

    inputEmail.focus();
    inputSenha.focus();

    cy.contains('O email precisa ser preenchido.');
  });

  it('Deve validar email em formato inválido', () => {
    const inputEmail = cy.get('[formControlName=email]');
    const inputSenha = cy.get('[formControlName=senha]');

    inputEmail.type('teste');
    inputSenha.focus();

    cy.contains('O email precisa seguir o formato "usuario@dominio.com".');
  });

  it('Deve validar senha vazia', () => {
    const inputSenha = cy.get('[formControlName=senha]');
    const btnEntrar = cy.get('button[type=submit]');

    inputSenha.focus();
    btnEntrar.focus();

    cy.contains('A senha precisa ser preenchida.');
  });

  it('Deve validar senha curta', () => {
    const inputSenha = cy.get('[formControlName=senha]');
    const btnEntrar = cy.get('button[type=submit]');

    inputSenha.type('123');
    btnEntrar.focus();

    cy.contains('A senha deve ter no mínimo 6 caracteres.');
  });
})
