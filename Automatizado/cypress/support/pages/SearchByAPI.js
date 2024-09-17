class SearchByAPI {
    searchProduct () {
        // Busca produtos pelo termo "head"
        cy.request('GET', 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=head').then((response) => {
            // Verifica se o status é 200
            expect(response.status).to.eq(200);
            // Verifica se o corpo da resposta não está vazio
            expect(response.body).to.not.be.null;
            // Verifica se o corpo é um array
            expect(response.body).to.be.an('array');
            // Verifica se há pelo menos um produto
            expect(response.body.length).to.be.greaterThan(0);

            // Salva a listagem de produtos da busca
            const products = response.body[0].products;

            // Verifica se todos possuem "head" no nome
            products.forEach((product) => {
                const productName = product.productName.toLowerCase();
                expect(productName).to.include('head');
            });
        })
    }
}

export default new SearchByAPI();

