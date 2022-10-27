class TarefasSetup {
  obterFormRegistro() {
    return {
      titulo: () => cy.get('[data-cy=titulo]'),
      prioridade: () => cy.get('[data-cy=prioridade]'),
      tituloItem: () => cy.get('[data-cy=tituloItem]'),
      btnAdicionarItem: () => cy.get('[data-cy=btnAdicionarItem]'),
      btnRemoverItem: () => cy.get('[data-cy=btnRemoverItem]'),
      btnGravar: () => cy.get('[data-cy=btnGravar]'),
    }
  }

  inserirTarefa(
    titulo: string = 'Teste Automizado',
    prioridade: string = 'Alta'
  ) {
    const form = this.obterFormRegistro();

    cy.contains('a', 'Nova Tarefa')
      .click();

    form.titulo()
      .type(titulo);

    form.prioridade()
      .click()
      .contains(prioridade)
      .click();

    form.btnGravar()
      .click();
  }
}

export default new TarefasSetup();
