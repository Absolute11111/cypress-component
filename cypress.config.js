const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "efnonu",
  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "e2e/**/*.cy.js", // <-- adapté à ton arborescence
    supportFile: "cypress/support/e2e.js",
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },
  video: false,
});
