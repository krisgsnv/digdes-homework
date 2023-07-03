<template>
  <main class="main">
    <slot>
      <Button
        class="button_secondary button_secondary_default go-back"
        @click="toMain"
      >
        <Icon :href="'#arrow'" class="go-back__icon" />
        <span class="go-back__text"> Вернуться к списку задач </span>
      </Button>
      <div class="task-detail-header">
        <h2>Код проекта #{{ id }}</h2>
        <h2 class="task-detail-header__subtitle">Название задачи</h2>
      </div>
    </slot>
  </main>
</template>

<script>
export default {
  props: {
    id: Number,
  },
  methods: {
    toMain() {
      this.$router.push({ name: "Tasks" });
    },
  },
};
</script>

<style lang="scss">
.go-back {
  &.button {
    @include flex-center;
    padding-left: 8px;
    align-self: flex-start;
  }
  &__back-text {
    margin-left: 8px;
  }
  &__icon {
    transform: rotate(90deg);
  }
}
.task-detail-header {
  padding: 24px;
  border: $border-default;
  margin-top: 24px;
  &__subtitle {
    margin-top: 16px;
  }
}
</style>
