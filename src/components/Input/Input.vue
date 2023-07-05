<template>
  <div class="input-wrapper" :class="classes">
    <input
      :type="type"
      class="input-wrapper__input"
      v-bind="$attrs"
      :placeholder="placeholder"
      :active="active"
      :disabled="disabled"
      :error="error"
      v-on="listeners"
    />
    <slot />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  computed: {
    classes() {
      return {
        "input-wrapper_default": !this.active && !this.disabled && !this.error,
        "input-wrapper_disabled": this.disabled,
        "input-wrapper_active": this.active,
        "input-wrapper_error": this.error,
      };
    },
    listeners() {
      const vm = this;
      return {
        ...this.$listeners,
        input: function (e) {
          vm.$emit("input", e.target.value);
        },
      };
    },
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "Введите значение...",
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
