<template>
  <Input
    :type="'search'"
    @focus="onFocus"
    @blur="onBlur"
    class="input-wrapper_search"
    v-model="value"
    :disabled="disabled"
    :placeholder="placeholder"
    :active="active"
    :error="error"
  >
    <Icon
      :href="icons.clear"
      :width="16"
      :height="16"
      class="input-wrapper__icon input-wrapper__icon_clear"
      @mousedown="reset"
      v-if="value || active"
    />
    <Icon :href="icons.search" class="input-wrapper__icon" />
  </Input>
</template>

<script>
export default {
  data: function () {
    return {
      value: this.initialValue,
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
  props: {
    initialValue: {
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
