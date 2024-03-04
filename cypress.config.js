const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalStudio: true, //for cypress studio


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: "https://practicesoftwaretesting.com/#/",
    env: {
      signIn : "auth/login",
      contact : "contact",
      amazon : "https://www.amazon.com/",
    }
  },
});

