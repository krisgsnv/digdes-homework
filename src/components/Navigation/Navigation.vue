<template>
  <header class="navigation">
    <router-link
      v-for="(button, i) in buttons.items"
      :key="i"
      :to="button.link"
    >
      <Button
        @click="setActiveButton(i)"
        :class="buttonClasses(i)"
        class="navigation__item button"
      >
        {{ button.text }}
      </Button>
    </router-link>
    <div v-click-outside="removeActiveUser">
      <Button
        @click="toggleActiveUser"
        :class="userButtonClasses"
        class="navigation-user"
        :title="user.title"
      >
        <Avatar :src="user.src" class="navigation-user__avatar" />
        <Icon :href="user.icon" class="navigation-user__arrow" />
      </Button>
      <DropdownMenu
        :class="dropdownClasses"
        class="dropdown navigation__dropdown dropdown_hidden"
        :actions="dropdown.actions"
      />
    </div>
  </header>
</template>

<script>
import src from "@/assets/images/profile.jpg";
import vClickOutside from "v-click-outside";

export default {
  data: function () {
    return {
      user: {
        src,
        active: false,
        title: "Профиль",
        icon: "#arrow",
      },
      dropdown: {
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
      },
      buttons: {
        active: 1,
        items: [
          { link: "/projects", text: "Проекты" },
          { link: "/tasks", text: "Задачи" },
          { link: "/users", text: "Пользователи" },
        ],
      },
    };
  },
  methods: {
    removeActiveUser() {
      this.user.active = false;
    },
    toggleActiveUser() {
      this.user.active = !this.user.active;
    },
    setActiveButton(i) {
      this.$emit("toggle", i);
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
        "navigation-user_active": this.user.active,
      };
    },
    dropdownClasses() {
      return {
        dropdown_active: this.user.active,
      };
    },
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
