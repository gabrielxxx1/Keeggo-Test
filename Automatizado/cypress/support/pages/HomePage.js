class HomePage {
    visit() {
      cy.visit('https://advantageonlineshopping.com/#/');
    }
  
    searchProduct(productName) {
      // Clica no ícone de busca
      cy.get('#menuSearch').click();
      // Digita o nome do produto e pressiona Enter
      cy.get('#autoComplete').type(`${productName}{enter}`);
      cy.wait(3000)
      cy.get('.autoCompleteCover > div > img').click()
    }
  }
  
  export default new HomePage();