<template>
  <img class="avatar" :src="src" alt="Изображение профиля" />
</template>

<script>
import "./style.scss";
export default {
  data: function () {
    return {};
  },
  props: {
    src: String,
  },
};
</script>
