<template>
  <section class="projects-empty">
    <p class="projects-empty__message">{{ message }}</p>
    <Button
      :text="'Добавить'"
      class="projects-empty__button button button_primary button_primary_default" />
  </section>
</template>

<script>
import "./style.scss";
import Button from "@/components/Button/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>
