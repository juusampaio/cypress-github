<reference types="cypress" />

describe('Teste Automatizado', () => {
  it('Deve executar as ações gravadas', () => {
    cy.visit('https://automationpratice.com.br/login');
    cy.get('#user').click();
    cy.get('#user').type('teste@teste.com');
    cy.get('#password').click();
    cy.get('#password').type('123456');
    cy.get('#btnLogin').click();
    cy.get('.swal2-confirm.swal2-styled').click();
  });
});