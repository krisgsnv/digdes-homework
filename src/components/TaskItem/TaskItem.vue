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
          class="list-item__status list-item__status_right">
          {{ task.authorEdited }} изменил(а) {{ task.dateEdited }}
        </span>
      </div>
    </div>
    <DropdownButton :dropdownProps="dropdown" :buttonProps="button" />
  </div>
</template>

<script>
import avatarSrc from "@/assets/images/profile.jpg";

import DropdownButton from "@/components/DropdownButton/DropdownButton.vue";
import Avatar from "@/components/Avatar/Avatar.vue";
import StatusLabel from "@/components/StatusLabel/StatusLabel.vue";

export default {
  data: function () {
    return {
      avatarSrc,
      button: {
        classes: "list-item__more-icon list-item__more-icon_default",
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
  components: {
    Avatar,
    StatusLabel,
    DropdownButton,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>