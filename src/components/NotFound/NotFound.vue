<template>
  <section class="not-found">
    <p class="not-found__message">{{ message }}</p>
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>