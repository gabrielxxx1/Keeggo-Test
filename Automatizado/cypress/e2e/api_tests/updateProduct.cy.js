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
      expect(response.status).to.eq(200);
      expect(response.body.statusMessage.success).to.be.true;

      const token = response.body.statusMessage.token;

      // Caminho para a imagem no diretório de fixtures
      const imagePath = '../fixtures/imgtestjpeg.jpg'; // Caminho relativo à pasta cypress/fixtures/

      // Carregar a imagem como multipart/form-data
      cy.fixture(imagePath, 'binary')
        .then(Cypress.Blob.binaryStringToBlob)
        .then((blob) => {
          const formData = new FormData();
          formData.append('file', blob, imagePath);

          // Adicionar o conteúdo do formulário e token de autorização
          const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          };

          // Enviar requisição POST com multipart/form-data
          cy.request({
            method: 'POST',
            url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/579987985/1300/Blue?product_id=3',
            headers: headers,
            body: formData, // Envia o FormData
            encoding: 'binary', // Garante que os dados binários sejam enviados corretamente
          }).then((response) => {
            cy.log(JSON.stringify(response.body)); // Loga a resposta para depuração
            expect(response.status).to.eq(200);
          });
        });
    });
  });
});