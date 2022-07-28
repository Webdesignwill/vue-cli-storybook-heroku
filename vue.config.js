const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "~bootstrap/scss/functions";
          @import "~bootstrap/scss/variables";
          @import "~bootstrap/scss/maps";
          @import "~bootstrap/scss/mixins";
          @import "@/assets/scss/index.scss";
        `,
      },
    },
  },
})
