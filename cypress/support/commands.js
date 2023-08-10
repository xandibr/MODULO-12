// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (
    usuario = Cypress.env('usuário'),
    senha = Cypress.env('senha')
) => {
    cy.visit('minha-conta')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('addProdutos', (Peça, Tamanho, Cor) => {
    cy.contains('[class="product-block grid"]',Peça).click()
    cy.get('.button-variable-item-' + Tamanho).click()
    cy.get('.button-variable-item-' + Cor).click()
    cy.get('.single_add_to_cart_button').click()
})

