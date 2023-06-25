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
        <StatusLabel :text="'Черновик'" class="status-label_draft" />
        <span
          v-if="task.dateEdited"
          class="list-item__status list-item__status_right">
          {{ task.authorEdited }} изменил(а) {{ task.dateEdited }}
        </span>
      </div>
    </div>
    <MoreIcon
      class="list-item__more-icon list-item__more-icon_default button_secondary button_secondary_default" />
    <Dropdown
      :actions="dropdownActions"
      class="list-item__dropdown dropdown_hidden" />
  </div>
</template>

<script>
import "./style.scss";
import avatarSrc from "@/assets/images/profile.jpg";

import MoreIcon from "@/components/MoreIcon/MoreIcon.vue";
import Dropdown from "@/components/Dropdown/Dropdown.vue";
import Avatar from "@/components/Avatar/Avatar.vue";
import StatusLabel from "@/components/StatusLabel/StatusLabel.vue";

const dropdownActions = [
  {
    link: "#",
    text: "Редактировать",
  },
  {
    link: "#",
    text: "Удалить",
    accent: true,
  },
];

export default {
  data: function () {
    return {
      avatarSrc,
      dropdownActions,
    };
  },
  props: {
    task: Object,
  },
  components: {
    Avatar,
    StatusLabel,
    MoreIcon,
    Dropdown,
  },
};
</script>
