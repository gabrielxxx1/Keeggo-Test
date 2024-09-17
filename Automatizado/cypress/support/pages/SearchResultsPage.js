class SearchResultsPage {
    verifyEachProductContains(term) {
      cy.get('.productName')
      .filter(':visible')
      .each(($el, index) => {
        const productName = $el.text();
        cy.log(`Produto visível ${index + 1}: ${productName}`);
        expect(productName.toLowerCase(), 'Produto encontrado').to.include('laptop');
      });
      }
    }
  
  export default new SearchResultsPage();