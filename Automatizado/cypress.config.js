const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    email: 'gbocas@gmail.com',
    loginPassword: '1234Ga',
    loginUser: 'gabriel',
  },
});