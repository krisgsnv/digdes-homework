<template>
  <div class="list-item">
    <div class="list-item__content">
      <p class="list-item__title">{{ title }}</p>
      <div class="list-item__info">
        <span class="list-item__num">{{ num }}</span>
        <span class="list-item__status">{{ created }}</span>
        <span class="list-item__status list-item__status_right">
          {{ modified }}
        </span>
      </div>
    </div>
    <MoreIcon
      class="list-item__more-icon list-item__more-icon_default button_secondary button_secondary_default"
    />
    <Dropdown
      :actions="dropdownActions"
      class="list-item__dropdown dropdown_hidden"
    />
  </div>
</template>

<script>
import "./style.scss";

import MoreIcon from "@/components/MoreIcon/MoreIcon.vue";
import Dropdown from "@/components/Dropdown/Dropdown.vue";

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
      dropdownActions,
    };
  },
  props: {
    title: String,
    num: String,
    created: String,
    modified: String,
  },
  components: {
    MoreIcon,
    Dropdown,
  },
};
</script>
