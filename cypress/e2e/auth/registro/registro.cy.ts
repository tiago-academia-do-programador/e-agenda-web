describe('Processo de Registro de Usuário', () => {

  beforeEach(() => {
    cy.visit('conta/registrar');
  });

  it('Deve acessar a página', () => {
    cy.title().should('contain', 'Registro');
  });

  // it('Deve registrar novo usuário', () => {
  //   const inputNome = cy.get('[formControlName=nome]');
  //   const inputEmail = cy.get('[formControlName=email]');
  //   const inputSenha = cy.get('[formControlName=senha]');
  //   const inputConfirmarSenha = cy.get('[formControlName=confirmarSenha]');
  //   const btnRegistrar = cy.get('button[type=submit]');


  //   inputNome.type('Teste Automatizado');
  //   inputEmail.type('teste@cypress.com');
  //   inputSenha.type('Teste@123');
  //   inputConfirmarSenha.type('Teste@123');
  //   btnRegistrar.click();

  //   cy.wait(300);

  //   cy.url().should('contain', 'dashboard');
  // });

  it('Deve notificar sobre usuário repetido', () => {
    const inputNome = cy.get('[formControlName=nome]');
    const inputEmail = cy.get('[formControlName=email]');
    const inputSenha = cy.get('[formControlName=senha]');
    const inputConfirmarSenha = cy.get('[formControlName=confirmarSenha]');
    const btnRegistrar = cy.get('button[type=submit]');


    inputNome.type('Teste Automatizado');
    inputEmail.type('teste@cypress.com');
    inputSenha.type('Teste@123');
    inputConfirmarSenha.type('Teste@123');
    btnRegistrar.click();

    cy.wait(300);

    cy.contains("Login 'teste@cypress.com' já está sendo utilizado.");
  });

  it('Deve notificar sobre senhas diferentes', () => {
    const inputNome = cy.get('[formControlName=nome]');
    const inputEmail = cy.get('[formControlName=email]');
    const inputSenha = cy.get('[formControlName=senha]');
    const inputConfirmarSenha = cy.get('[formControlName=confirmarSenha]');
    const btnRegistrar = cy.get('button[type=submit]');


    inputNome.type('Teste Automatizado');
    inputEmail.type('teste@cypress.com');
    inputSenha.type('Teste@123');
    inputConfirmarSenha.type('Teste@1234');
    btnRegistrar.click();

    cy.wait(300);

    cy.contains("As senhas não conferem.");
  });

  it('Deve notificar sobre caracteres não alfanuméricos', () => {
    const inputNome = cy.get('[formControlName=nome]');
    const inputEmail = cy.get('[formControlName=email]');
    const inputSenha = cy.get('[formControlName=senha]');
    const inputConfirmarSenha = cy.get('[formControlName=confirmarSenha]');
    const btnRegistrar = cy.get('button[type=submit]');

    inputNome.type('Teste Automatizado');
    inputEmail.type('teste@cypress.com');
    inputSenha.type('Teste123');
    inputConfirmarSenha.type('Teste123');
    btnRegistrar.click();

    cy.wait(300);

    cy.contains("Senhas devem conter ao menos um caracter não alfanumérico.");
  });

  it('Deve notificar sobre formulário inválido', () => {
    const inputNome = cy.get('[formControlName=nome]');
    const inputEmail = cy.get('[formControlName=email]');
    const inputSenha = cy.get('[formControlName=senha]');
    const inputConfirmarSenha = cy.get('[formControlName=confirmarSenha]');
    const btnRegistrar = cy.get('button[type=submit]');

    inputEmail.type('teste@cypress.com');
    inputSenha.type('Teste@123');
    inputConfirmarSenha.type('Teste@123');
    btnRegistrar.click();

    cy.wait(300);

    cy.contains('Por favor, preencha o formulário corretamente antes de prosseguir.');
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
    const btnEntrar = cy.get('button[type=submit]');

    inputEmail.focus();
    inputSenha.type('Teste@123');
    btnEntrar.focus();

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
