
# Projeto de Testes Automatizados com Cypress

Este repositório contém testes automatizados utilizando Cypress para validação de funcionalidades da API e interface de usuário. O Cypress é uma poderosa ferramenta para testes end-to-end, e este projeto foca em validar fluxos de trabalho, como busca de produtos e atualização de imagens via API.

# Requisitos do Sistema
Antes de começar, certifique-se de que seu ambiente atende aos seguintes requisitos:

Node.js (versão 12 ou superior)
npm (gerenciador de pacotes do Node.js)
Git (para clonar o repositório)

# Instalação do Ambiente
Siga os passos abaixo para configurar e rodar os testes em sua máquina:

1. Clonar o Repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Entrar no Diretório do Projeto
cd nome-do-repositorio

3. Instalar Dependências
O Cypress e outras dependências necessárias estão definidas no arquivo package.json. Para instalar todas as dependências, execute:

npm install

4. Instalar Plugins Adicionais (Opcional)
Se você precisar de manipulação de arquivos, como no caso de upload de imagens, certifique-se de instalar o plugin cypress-fs (ou qualquer outro plugin necessário):

npm install cypress-fs --save-dev

# Estrutura do Projeto
cypress/fixtures/: Armazena arquivos estáticos, como imagens, usados nos testes.

cypress/e2e/: Contém os arquivos de testes end-to-end.

cypress/support/: Inclui comandos personalizados e arquivos de suporte do Cypress.

# Configuração Adicional
Se o projeto faz uso de variáveis de ambiente, essas devem ser configuradas no arquivo cypress.config.js ou carregadas através de arquivos .env com plugins como cypress-dotenv.

# Execução dos Testes
1. Executar o Cypress com Interface Gráfica
Para abrir a interface gráfica do Cypress, use o seguinte comando:

npx cypress open

Isso abrirá a interface interativa onde você pode escolher e rodar seus testes manualmente.

2. Executar os Testes em Modo Headless (Sem Interface)
Se você quiser rodar os testes em modo headless (sem interface gráfica), execute:

npx cypress run

Este comando executará todos os testes de forma automática no terminal.

3. Executar Testes Específicos
Se você quiser rodar um arquivo de teste específico, use o seguinte comando:

npx cypress run --spec "cypress/e2e/nomeDoTeste.cy.js"

# Qualquer dúvida é só chamar!
