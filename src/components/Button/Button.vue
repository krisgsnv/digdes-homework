<template>
  <button
    @click="onClick"
    :class="classes"
    class="button"
    type="button"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  data: function () {
    return {
      active: false,
      disabled: false,
    };
  },
  props: {
    onClick: {
      type: Function,
      default: function () {},
    },
  },
  computed: {
    classes() {
      return {
        button_default: !this.disabled && !this.active,
        button_disabled: this.disabled,
        button_active: this.active,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
