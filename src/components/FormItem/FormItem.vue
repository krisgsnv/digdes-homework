<template>
  <label class="form-item">
    <span class="form-item__label">
      {{ label }}
      <sup v-if="required" class="form-item__required">*</sup>
    </span>
    <slot />
  </label>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    required: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
