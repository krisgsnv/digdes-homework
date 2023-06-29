<template>
  <div class="input-wrapper input-wrapper_search" :class="classes">
    <input
      type="search"
      @focus="onFocus"
      @blur="onBlur"
      class="input-wrapper__input"
      v-model="value"
      :disabled="disabled"
      :placeholder="placeholder"
    />
    <Icon
      :href="icons.clear"
      :width="16"
      :height="16"
      class="input-wrapper__icon input-wrapper__icon_clear"
      @mousedown="reset"
      v-if="value || active"
    />
    <Icon :href="icons.search" class="input-wrapper__icon" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      value: this.defaultValue,
      active: false,
      disabled: false,
      error: false,
      icons: {
        search: "#search",
        clear: "#clear",
      },
    };
  },
  methods: {
    onFocus() {
      this.active = true;
    },
    onBlur() {
      this.active = false;
    },
    reset() {
      this.value = "";
    },
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
  },
  props: {
    defaultValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Поиск...",
    },
  },
};
</script>
