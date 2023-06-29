<template>
  <div>
    <Button
      :class="[buttonClasses, buttonProps.classes]"
      class="dropdown-button button button_small button_secondary"
      :title="button.title"
      @click="toggleActive"
    >
      <slot />
    </Button>
    <DropdownMenu
      :active="active"
      :actions="dropdownProps.actions"
      :class="dropdownProps.classes"
    />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      active: false,
      button: {
        title: "Действия",
      },
    };
  },
  methods: {
    toggleActive() {
      this.active = !this.active;
    },
  },
  computed: {
    buttonClasses() {
      return {
        button_secondary_default: !this.active,
        button_secondary_active: this.active,
      };
    },
  },
  props: {
    buttonProps: {
      type: Object,
      default() {
        return {
          classes: "",
        };
      },
    },
    dropdownProps: Object,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
