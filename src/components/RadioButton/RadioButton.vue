<template>
  <label class="radio" :class="classes">
    {{ label }}
    <input
      type="radio"
      @change="onChange"
      :disabled="disabled"
      :checked="isChecked"
      v-bind="$attrs"
      :value="value"
      v-show="false"
    />
    <Icon :href="iconHref" class="radio__icon" :class="iconClasses" />
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    prop: "modelValue",
    event: "change",
  },
  computed: {
    classes() {
      return {
        radio_disabled: this.disabled,
      };
    },
    iconHref() {
      return this.isChecked ? "#radio_active" : "#radio";
    },
    iconClasses() {
      return {
        radio__icon_disabled: this.disabled,
      };
    },
    isChecked() {
      return this.modelValue == this.value;
    },
  },
  methods: {
    onChange(e) {
      this.$emit("change", e.target.value);
    },
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      default: "",
    },
    value: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
