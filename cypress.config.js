const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
      "specPattern": "**/*.spec.js"
  },
},
);
