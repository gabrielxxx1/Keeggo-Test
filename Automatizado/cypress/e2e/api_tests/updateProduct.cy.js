import 'cy-fs';

describe('Teste de atualizar informações do produto', () => {
    it('Realizar login e recuperar o userId', () => {
      // Dados de login a partir das variáveis de ambiente
      const loginData = {
        email: Cypress.env('email'),
        loginPassword: Cypress.env('loginPassword'),
        loginUser: Cypress.env('loginUser'),
      };
  
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
  
        const userId = response.body.statusMessage.userId;
        cy.log(`O userId é: ${userId}`);
        cy.wrap(userId).as('userId');
  
        const token = response.body.statusMessage.token;
        cy.wrap(token).as('authToken');
      });

      cy.wait(500)

      cy.get('@authToken').then((token) => {
        cy.fixture('https://img.freepik.com/vetores-premium/vetor-cachorro-pequeno-feliz-fofo-cachorrinho-engracado-vetor-cachorro-fofo-enfiando-a-lingua-para-fora-icone-dos-desenhos-animados_942818-58.jpg', 'binary').then((imageBinary) => {
          // Converte a imagem binária para Base64
          const base64Image = Cypress.Buffer.from(imageBinary, 'binary').toString('base64');

          // Prepara body para envio
          const updateImage = {
            color: "blue",
            file: base64Image,
            product_id: 31,
            source: "aa",
            userId: 179991435
          }

          cy.request({
            method: 'PUT',
            url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product',
            body: updateImage,
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': (`Bearer ${token}`)
            },
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.statusMessage.success).to.be.true;
            expect(response.body.statusMessage.reason).to.eq("Product was updated successful")
          });
        })
      })
    });
  });
  