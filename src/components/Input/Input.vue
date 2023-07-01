<template>
  <div class="input-wrapper" :class="classes">
    <input
      :type="type"
      class="input-wrapper__input"
      v-bind="$attrs"
      :value="value"
      :placeholder="placeholder"
      v-on="listeners"
      :active="active"
      :disabled="disabled"
      :error="error"
    />
    <slot />
  </div>
</template>

<script>
export default {
  computed: {
    classes() {
      return {
        "input-wrapper_default": !this.active && !this.disabled && !this.error,
        "input-wrapper_disabled": this.disabled,
        "input-wrapper_active": this.active,
        "input-wrapper_error": this.error,
      };
    },
    listeners: function () {
      const vm = this;
      return Object.assign({}, this.$listeners, {
        input: function (event) {
          vm.$emit("input", event.target.value);
        },
      });
    },
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
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
