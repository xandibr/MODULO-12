const perfil = require('../fixtures/pefil.json')

context('Login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta')      
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Fazendo login', () => {
        cy.get('#username').type(perfil.usuário)
        cy.get('#password').type(perfil.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    });
})