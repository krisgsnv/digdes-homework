<template>
  <div class="user-heading">
    <div class="user-heading__inner">
      <h1 class="h1">Котов Семен Васильевич</h1>
      <StatusLabel :status="status" />
    </div>
    <DropdownButton :dropdownProps="dropdown" />
  </div>
</template>

<script>
import StatusLabel from "@/components/StatusLabel/StatusLabel.vue";
import DropdownButton from "@/components/DropdownButton/DropdownButton.vue";

export default {
  data() {
    return {
      dropdown: {
        classes: "user-heading__dropdown dropdown_hidden",
        actions: [
          {
            link: "#",
            text: "Редактировать",
          },
          {
            link: "#",
            text: "Изменить пароль",
          },
          {
            link: "#",
            text: "Просмотр задач пользователя",
          },
        ],
      },
    };
  },
  props: {
    status: String,
    description: String,
  },
  components: {
    StatusLabel,
    DropdownButton,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
