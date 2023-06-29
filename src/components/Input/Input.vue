<template>
  <div class="input-wrapper" :class="classes">
    <input
      type="text"
      class="input-wrapper__input"
      @blur="onBlur"
      @focus="onFocus"
      v-on="listeners"
      v-model="value"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
    />
    <slot />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      value: this.defaultValue,
      active: this.defaultActive,
      disabled: false,
      error: false,
    };
  },
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
      return {
        ...this.$listeners,
      };
    },
  },
  methods: {
    onFocus() {
      this.active = true;
    },
    onBlur() {
      this.active = false;
    },
  },
  props: {
    defaultValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Введите значение...",
    },
    readonly: Boolean,
    defaultActive: Boolean,
  },
};
</script>
