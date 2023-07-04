<template>
  <div class="checkbox" :class="classes" @click="onChange">
    <input
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      v-show="false"
    />
    <Icon :href="iconHref" class="checkbox__icon" :class="iconClasses" />
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
        checkbox_disabled: this.disabled,
      };
    },
    iconHref() {
      if (!this.checked) {
        return "#check";
      } else if (this.rounded) {
        return "#check_half";
      } else {
        return "#check_active";
      }
    },
    iconClasses() {
      return {
        checkbox__icon_checked: this.checked,
        checkbox__icon_disabled: this.disabled,
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
    rounded: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
