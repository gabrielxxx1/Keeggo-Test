describe('Testes de API - Produtos', () => {
    it('Deve retornar uma lista de produtos', () => {
        
      const produtoBuscado = 'head'
      // Busca produtos pelo termo "head"
        cy.request('GET', `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=${produtoBuscado}`).then((response) => {
        // Verifica se o status é 200
        expect(response.status, 'Status code').to.eq(200);
        // Verifica se o corpo da resposta não está vazio
        expect(response.body, 'Não é nulo').to.not.be.null;
        // Verifica se o corpo é um array
        expect(response.body, 'É um array').to.be.an('array');
        // Verifica se há pelo menos um produto
        expect(response.body.length, 'Maior que zero').to.be.greaterThan(0);

        // Salva a listagem de produtos da busca
        const products = response.body[0].products;

        // Verifica se todos possuem "head" no nome
        products.forEach((product) => {
            const productName = product.productName.toLowerCase();
            expect(productName,`Produto contém texto "${produtoBuscado}"`).to.include(produtoBuscado);
        });
      });
    });
  });