<template>
  <div class="select-wrapper">
    <div
      class="input-wrapper input-wrapper_select"
      :class="[classes, inputWrapperClasses]"
      @click="onClick"
    >
      <input
        readonly="true"
        class="input-wrapper__input input-wrapper__input_select"
        :placeholder="placeholder"
        v-bind="$attrs"
      />
      <Icon :href="icon" class="input-wrapper__icon" />
    </div>
    <DropdownMenu
      :actions="actions"
      :active="active"
      class="dropdown_select"
      @select="onSelect"
      :selectedIndex="selected"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: "#arrow",
      // value:
      //   this.selectedIndex >= 0 ? this.actions[this.selectedIndex].text : "",
      active: false,
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
    selected() {
      return this.selectedIndex;
    },
  },
  methods: {
    onClick() {
      this.active = !this.active;
    },
    onSelect(action) {
      this.value = action.text;
      this.active = false;
      this.$emit("input", this.value);
    },
  },
  props: {
    actions: Array,
    selectedIndex: Number,
    placeholder: String,
    inputWrapperClasses: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
