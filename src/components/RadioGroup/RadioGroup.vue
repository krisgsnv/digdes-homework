<template>
  <div>
    <label v-for="(value, i) in values" :key="i" class="radio-label">
      <span>{{ value.text }}</span>
      <div class="radio" :class="classes(value)">
        <input
          type="radio"
          :value="value.text"
          :disabled="value.disabled"
          @change="onChange"
          v-model="selected"
          v-show="false"
        />
        <Icon
          :href="iconHref(value.text)"
          class="radio__icon"
          :class="iconClasses(value)"
        />
      </div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: this.initialSelected,
    };
  },
  computed: {
    classes() {
      return function (value) {
        return {
          radio_disabled: value.disabled,
        };
      };
    },
    iconHref() {
      return function (value) {
        return value == this.selected ? "#radio_active" : "#radio";
      };
    },
    iconClasses() {
      return function (value) {
        return {
          radio__icon_selected: value.text == this.selected,
          radio__icon_disabled: value.disabled,
        };
      };
    },
  },
  methods: {
    onChange() {
      this.$emit("change", this.selected);
    },
  },
  props: {
    values: {
      type: Array,
      default: function () {
        return [];
      },
    },
    initialSelected: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
