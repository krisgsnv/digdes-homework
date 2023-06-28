import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  "@/components",
  true,
  /^[^_].+\.vue$/i
);

requireComponent.keys().forEach((filename) => {
  const componentConfig = requireComponent(filename);
  const componentName = upperFirst(
    camelCase(
      /\/\w+\.vue/
        .exec(filename)[0]
        .replace(/^\.\//, "")
        .replace(/\.\w+$/, "")
    )
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});
