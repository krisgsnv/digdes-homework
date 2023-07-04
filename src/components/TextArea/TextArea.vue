<template>
  <div class="input-wrapper" :class="classes">
    <textarea
      class="input-wrapper__input textarea"
      @blur="onBlur"
      @focus="onFocus"
      @input="onInput"
      v-bind="$attrs"
      :disabled="disabled"
      :placeholder="placeholder"
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
    onInput(event) {
      this.value = event.target.value;
      this.$emit("input", this.value);
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
    defaultActive: Boolean,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
