import 'cypress-file-upload';

// Importa as bibliotecas necessárias
const FormData = require('form-data');
const fs = require('fs');

describe('Envio de imagem usando multipart/form-data via Cypress', () => {
  it('Realizar login e enviar imagem do produto', () => {
    // Dados de login
    const loginData = {
      email: Cypress.env('email'),
      loginPassword: Cypress.env('loginPassword'),
      loginUser: Cypress.env('loginUser'),
    };

    // Realiza o login e obtém o token de autenticação
    cy.request({
      method: 'POST',
      url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login',
      body: loginData,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      expect(response.status,'Status code').to.eq(200);
      expect(response.body.statusMessage.success,'Mensagem de sucesso identificada').to.be.true;

      const token = response.body.statusMessage.token;

      // Caminho para a imagem no diretório de fixtures
      const imagePath = '../fixtures/imgtestjpeg.jpg'; // Caminho relativo à pasta cypress/fixtures/

      // Carregar a imagem como multipart/form-data
      cy.fixture(imagePath, 'binary')
        .then((fileContent) => {
          const blob = Cypress.Blob.binaryStringToBlob(fileContent, 'image/jpeg');
          const formData = new FormData();

          formData.append('file', blob, 'imgtestjpeg.jpg');

          // Adicionar o conteúdo do formulário e token de autorização
          const headers = {
            'Authorization': `Bearer ${token}`,
          };

          // Enviar requisição POST com a imagem
          cy.request({
            method: 'POST',
            url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/579987985/1300/Blue?product_id=3',
            headers: headers,
            body: formData, // Envia o FormData
            encoding: 'binary', // Garante que os dados binários sejam enviados corretamente
            responseType: 'arraybuffer',
          }).then((response) => {
            const textDecoder = new TextDecoder();
            const responseText = textDecoder.decode(response.body);
            const jsonResponse = JSON.parse(responseText);

            expect(jsonResponse.reason, 'Mensagem de sucesso').to.eq('Product was updated successful');
            expect(jsonResponse.imageId, 'Id da nova imagem').to.not.be.null;
            expect(response.status,'Status code').to.eq(200);
        
          });
        });
    });
  });
});