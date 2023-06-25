<template>
  <header class="navigation">
    <Button
      :text="'Проекты'"
      class="navigation__item navigation__item_active" />
    <Button
      :text="'Задачи'"
      class="navigation__item navigation__item_default" />
    <button class="navigation-user" type="button" title="Профиль">
      <Avatar :src="avatarSrc" class="navigation-user__avatar" />
      <svg
        class="navigation-user__arrow"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor">
        <use xlink:href="#nav-arrow" />
      </svg>
    </button>
    <Dropdown
      :actions="dropdownActions"
      class="navigation__dropdown dropdown_hidden" />
  </header>
</template>

<script>
import avatarSrc from "@/assets/images/profile.jpg";
import Avatar from "@/components/Avatar/Avatar.vue";
import Button from "@/components/Button/Button.vue";
import Dropdown from "@/components/Dropdown/Dropdown.vue";

import "./style.scss";

const dropdownActions = [
  {
    link: "#",
    text: "Профиль",
  },
  {
    link: "#",
    text: "Выход",
  },
];

export default {
  data: function () {
    return {
      avatarSrc,
      dropdownActions,
    };
  },
  components: {
    Button,
    Avatar,
    Dropdown,
  },
};
</script>
