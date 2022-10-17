describe('Processo de Login de Usuário', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve acessar a página', () => {
    cy.title().should('contain', 'Login');
  });

  it('Deve autenticar usuário válido', () => {
    const inputEmail = cy.get('[formControlName=email]');
    const inputSenha = cy.get('[formControlName=senha]');
    const btnEntrar = cy.get('button[type=submit]');

    inputEmail.type('tiago4@gmail.com');
    inputSenha.type('Tiago@123');
    btnEntrar.click();

    cy.wait(500);
    cy.url().should('contain', 'dashboard');
  });

  it('Deve notificar credenciais inválidas', () => {
    const inputEmail = cy.get('[formControlName=email]');
    const inputSenha = cy.get('[formControlName=senha]');
    const btnEntrar = cy.get('button[type=submit]');

    inputEmail.type('tiago4@gmail.com');
    inputSenha.type('Teste@123');
    btnEntrar.click();

    cy.wait(300);
    cy.contains('Usuário ou senha incorretos');
  });

  it('Deve notificar sobre formulário inválido', () => {
    const inputEmail = cy.get('[formControlName=email]');
    const inputSenha = cy.get('[formControlName=senha]');
    const btnEntrar = cy.get('button[type=submit]');

    inputEmail.type('tiago');
    inputSenha.type('Teste@123');
    btnEntrar.click();

    cy.wait(300);

    cy.contains('Por favor, preencha o formulário corretamente antes de prosseguir.');
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
