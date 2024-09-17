const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    email: 'teste2@teste.com',
    loginPassword: 'Teste3434',
    loginUser: 'teste343455',
  },
});