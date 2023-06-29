<template>
  <button
    :class="classes"
    class="button"
    type="button"
    :disabled="disabled"
    v-on="listeners"
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
  computed: {
    classes() {
      return {
        button_default: !this.disabled && !this.active,
        button_disabled: this.disabled,
        button_active: this.active,
      };
    },
    listeners() {
      return {
        ...this.$listeners,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
