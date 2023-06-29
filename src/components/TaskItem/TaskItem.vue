<template>
  <div class="list-item">
    <div class="list-item__content">
      <div class="task-item__heading">
        <p class="list-item__name">{{ task.name }}</p>
        <Avatar :src="avatarSrc" />
      </div>
      <div class="list-item__info">
        <span class="list-item__num">
          {{ task.projectCode }}#{{ task.number }}
        </span>
        <span class="list-item__status">
          {{ task.author }} создал(а) {{ task.dateCreated }}
        </span>
        <StatusLabel :status="task.status" />
        <span
          v-if="task.dateEdited"
          class="list-item__status list-item__status_right"
        >
          {{ task.authorEdited }} изменил(а) {{ task.dateEdited }}
        </span>
      </div>
    </div>
    <ButtonDropdown :dropdownProps="dropdown" :buttonProps="button">
      <Icon
        :href="button.icon"
        class="dropdown-button__svg dropdown-button__svg_secondary"
      />
    </ButtonDropdown>
  </div>
</template>

<script>
import avatarSrc from "@/assets/images/profile.jpg";

export default {
  data: function () {
    return {
      avatarSrc,
      button: {
        classes: "list-item__dots list-item__dots_default",
        icon: "#dots",
      },
      dropdown: {
        classes: "list-item__dropdown",
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
    task: Object,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
