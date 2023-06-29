<template>
  <header class="navigation">
    <Button
      v-for="(button, i) in buttons.items"
      :key="i"
      @click="setActiveButton(i)"
      :class="buttonClasses(i)"
      class="navigation__item button"
    >
      {{ button }}
    </Button>
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
  </header>
</template>

<script>
import src from "@/assets/images/profile.jpg";

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
        active: 0,
        items: ["Проекты", "Задачи", "Создать задачу"],
      },
    };
  },
  methods: {
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
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
