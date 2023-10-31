context('Login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta')      
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Fazendo login', () => {
        cy.fixture('perfil.json').then((perfil) => {
            cy.get('#username').type(perfil.usuario); // Correção da propriedade 'usuario'
            cy.get('#password').type(perfil.senha, { log: false });
            cy.get('.woocommerce-form > .button').click();
        });
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    });
})