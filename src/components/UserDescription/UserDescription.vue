<template>
  <div class="user-description">
    <h3 class="user-description__title">О себе:</h3>
    <p class="user-description__description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
