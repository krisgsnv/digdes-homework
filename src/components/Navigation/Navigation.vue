<template>
  <header class="navigation">
    <button
      v-for="(button, i) in buttons.items"
      :key="i"
      @click="setActiveButton(i)"
      :class="buttonClasses(i)"
      class="navigation__item button">
      {{ button }}
    </button>
    <button
      @click="toggleActiveUser"
      :class="userButtonClasses"
      class="navigation-user"
      type="button"
      title="Профиль">
      <Avatar :src="user.src" class="navigation-user__avatar" />
      <Icon :href="dropdown.icon" class="navigation-user__arrow" />
    </button>
    <ul
      :class="dropdownClasses"
      class="dropdown navigation__dropdown dropdown_hidden">
      <li v-for="action in dropdown.actions" :key="action.text">
        <a
          :href="action.link"
          :class="{ dropdown__action_accent: action.accent }"
          class="dropdown__action">
          {{ action.text }}
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
import "./style.scss";
import src from "@/assets/images/profile.jpg";

import Avatar from "@/components/Avatar/Avatar.vue";
//import Button from "@/components/Button/Button.vue";
import Icon from "@/components/Icon/Icon.vue";

export default {
  data: function () {
    return {
      user: {
        src,
        isActive: false,
      },
      dropdown: {
        icon: "#arrow",
        actions: [
          {
            link: "#",
            text: "Профиль",
          },
          {
            link: "#",
            text: "Выход",
          },
        ],
        isActive: false,
      },
      buttons: {
        active: 0,
        items: ["Проекты", "Задачи", "Пользователи"],
      },
    };
  },
  methods: {
    toggleActiveUser() {
      this.user.isActive = !this.user.isActive;
      this.dropdown.isActive = !this.dropdown.isActive;
    },
    setActiveButton(i) {
      this.buttons.active = i;
    },
  },
  computed: {
    buttonClasses() {
      return (i) => ({
        navigation__item_active: i == this.buttons.active,
        navigation__item_default: !(i == this.buttons.active),
      });
    },
    userButtonClasses() {
      return {
        "navigation-user_active": this.user.isActive,
      };
    },
    dropdownClasses() {
      return {
        dropdown_active: this.dropdown.isActive,
      };
    },
  },
  components: {
    //    Button,
    Avatar,
    Icon,
  },
};
</script>
