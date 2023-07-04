<template>
  <div class="toggler" :class="classes" @click="onChange">
    <input
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      v-show="false"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: this.initialChecked,
    };
  },
  computed: {
    classes() {
      return {
        toggler_checked: this.checked,
        toggler_disabled: this.disabled,
      };
    },
  },
  methods: {
    onChange() {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.$emit("change", this.checked);
      }
    },
  },
  props: {
    initialChecked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
