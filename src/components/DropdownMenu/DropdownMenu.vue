<template>
  <ul :class="dropdownClasses" class="dropdown">
    <li
      v-for="(action, i) in actions"
      :key="i"
      :class="actionClasses(action, i)"
      class="dropdown__action"
      @click="select(action, i)"
    >
      {{ action.text }}
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    dropdownClasses() {
      return {
        dropdown_active: this.active,
        dropdown_hidden: !this.active,
      };
    },
    selected() {
      return this.selectedIndex;
    },
  },
  methods: {
    select(action) {
      this.$emit("select", action);
    },
    actionClasses(action, i) {
      return {
        dropdown__action_accent: action.accent,
        dropdown__action_selected: i == this.selected,
      };
    },
  },
  props: {
    actions: Array,
    selectedIndex: Number,
    active: Boolean,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
