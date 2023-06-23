const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: (content, loaderContext) => {
          if (loaderContext.resourcePath.endsWith("vars.scss")) {
            return `@import "@/scss/mixins.scss";${content}`;
          }
          else if (loaderContext.resourcePath.endsWith("mixins.scss")) {
            return `@import "@/scss/vars.scss";${content}`;
          }
          return `@import "@/scss/vars.scss"; @import "@/scss/mixins.scss";${content}`;
        },
      },
    },
  },
});
