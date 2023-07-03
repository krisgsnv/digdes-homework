<template>
  <main class="main">
    <slot>
      <NotFound :message="'Ничего не найдено'">
        <Button
          class="not-found__button button_primary button_primary_default"
          @click="toMain"
        >
          На главную
        </Button>
      </NotFound>
    </slot>
  </main>
</template>

<script>
export default {
  methods: {
    toMain() {
      this.$router.push({ name: "Tasks" });
    },
  },
};
</script>
