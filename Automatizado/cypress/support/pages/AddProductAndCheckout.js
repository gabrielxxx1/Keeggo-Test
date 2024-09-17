class AddProductAndCheckout {
    addProduct() {
        // Vai para a página de um dos produtos para adicionar ao carrinho
        cy.get('#\\31').click();

        // Adiciona produto ao carrinho
        cy.get('.fixedBtn > .roboto-medium').click();
    }

    checkout() {
        // Vai para a página de pagamentos
        cy.get('#shoppingCartLink').click();
    }
}
export default new AddProductAndCheckout();