<template>
  <div>
    <button
      :class="[buttonClasses, buttonProps.classes]"
      class="dropdown-button button button_small button_secondary"
      type="button"
      :title="button.title"
      @click="toggleActive"
    >
      <Icon
        :href="button.icon"
        class="dropdown-button__svg dropdown-button__svg_secondary"
      />
    </button>
    <ul :class="[dropdownProps.classes, dropdownClasses]" class="dropdown">
      <li v-for="action in dropdownProps.actions" :key="action.text">
        <a
          :href="action.link"
          :class="{ dropdown__action_accent: action.accent }"
          class="dropdown__action"
        >
          {{ action.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";

export default {
  data: function () {
    return {
      button: {
        icon: "#more-icon",
        title: "Действия",
        isActive: false,
      },
      dropdown: {
        isActive: false,
      },
    };
  },
  methods: {
    toggleActive() {
      this.button.isActive = !this.button.isActive;
      this.dropdown.isActive = !this.dropdown.isActive;
    },
  },
  computed: {
    buttonClasses() {
      return {
        button_secondary_default: !this.button.isActive,
        button_secondary_active: this.button.isActive,
      };
    },
    dropdownClasses() {
      return {
        dropdown_active: this.dropdown.isActive,
      };
    },
  },
  props: {
    buttonProps: {
      default: "",
    },
    dropdownProps: Object,
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
