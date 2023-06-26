<template>
  <div class="user-pic">
    <img :src="src" alt="Изображение профиля" />
    <DropdownButton :dropdownProps="dropdown" class="user-pic__button" />
  </div>
</template>

<script>
import DropdownButton from "@/components/DropdownButton/DropdownButton.vue";

export default {
  data() {
    return {
      button: {
        classes: "user-pic__icon",
      },
      dropdown: {
        classes: "user-pic__dropdown dropdown_hidden",
        actions: [
          {
            link: "#",
            text: "Редактировать",
          },
          {
            link: "#",
            text: "Удалить",
            accent: true,
          },
        ],
      },
    };
  },
  props: {
    src: String,
  },
  components: {
    DropdownButton,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
