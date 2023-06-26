<template>
  <span class="status-label" :class="classes">{{ text }}</span>
</template>

<script>
export default {
  props: {
    status: String,
  },
  computed: {
    text() {
      switch (this.status) {
        case "DRAFT":
          return "Черновик";
        case "IN_PROCESS":
          return "В работе";
        case "COMPLETED":
          return "Завершена";
        case "TESTING":
          return "Тестирование";
        case "TESTING_DONE":
          return "Выполнена";
        case "CLOSED":
          return "Закрыта";
        case "DELETED":
          return "Удалена";
        case "ACTIVE":
          return "Активен";
        case "NOTACTIVE":
          return "Неактивен";
        default:
          return "";
      }
    },
    classes() {
      return `status-label_${this.status.split("_").join("-").toLowerCase()}`;
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
