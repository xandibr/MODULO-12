context('Exercicio - Testes End-to-end - Fluxo de pedido', () => { 
    beforeEach(() => {
        cy.intercept('POST', '**?wc-ajax=checkout').as('checkoutPOST')
        cy.login()
    });

    it.only('Adicionando produtos ao carrinho', () => {
        cy.visit('produtos')
        cy.addProdutos('Abominable Hoodie', 'XL', 'Green')
        cy.visit('produtos')
        cy.addProdutos('Beaumont Summit Kit', 'XL', 'Yellow')
        cy.visit('produtos/page/2/')
        cy.addProdutos('Hero Hoodie', 'XL', 'Green')
        cy.visit('produtos/page/2/')
        cy.addProdutos('Lando Gym Jacket', 'XL', 'Gray')

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4)

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.wait('@checkoutPOST')
        cy.get('.page-title').should('have.text', 'Pedido recebido')
    });
});