<template>
  <input
    type="text"
    class="input"
    :class="classes"
    @focus="onFocus"
    @blur="onBlur"
    v-model="value"
    :disabled="disabled"
    placeholder="Введите текст..." />
</template>

<script>
import "./style.scss";
export default {
  data: function () {
    return {
      value: "",
      active: false,
      disabled: false,
      error: false,
    };
  },
  methods: {
    onFocus() {
      this.active = true;
    },
    onBlur() {
      if (!this.value) {
        this.error = true;
      }
      this.active = false;
    },
  },
  computed: {
    classes() {
      return {
        input_default: !this.active && !this.disabled && !this.error,
        input_disabled: this.disabled,
        input_active: this.active,
        input_error: this.error,
      };
    },
  },
};
</script>
