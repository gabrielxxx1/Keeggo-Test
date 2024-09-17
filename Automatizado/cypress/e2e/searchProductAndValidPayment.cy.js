import HomePage from '../support/pages/HomePage';
import SearchResultsPage from '../support/pages/SearchResultsPage';
import AddProductAndCheckout from '../support/pages/AddProductAndCheckout';

describe('Busca de Produto', () => {
  context('Ajusta resolução para versão WEB', () => {
    beforeEach(() => {
      cy.viewport(1280, 800)
    })
  })

  it('Deve buscar um produto e verificar os resultados', () => {
    // Acessa a página inicial
    HomePage.visit(); 

    // Realiza a busca pelo produto "laptop"
    const produtoBuscado = 'laptop';
    HomePage.searchProduct(produtoBuscado);

    // Verifica se os resultados contêm o termo buscado
    SearchResultsPage.verifyEachProductContains(produtoBuscado);

    // Adiciona um produto e vai pro checkout
    AddProductAndCheckout.addProduct();
    AddProductAndCheckout.checkout();

    // Verifica se os resultados contêm o termo buscado, agora na página de pagamentos
    SearchResultsPage.verifyEachProductContains(produtoBuscado);
  });
});