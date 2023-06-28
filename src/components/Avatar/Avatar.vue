<template>
  <img class="avatar" :src="src" alt="Изображение профиля" />
</template>

<script>
export default {
  props: {
    src: String,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
