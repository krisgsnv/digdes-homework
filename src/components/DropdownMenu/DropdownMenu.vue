<template>
  <ul :class="classes" class="dropdown">
    <li v-for="(action, i) in actions" :key="i">
      <a
        :href="action.link"
        :class="{
          dropdown__action_accent: action.accent,
          dropdown__action_selected: i == selected,
        }"
        class="dropdown__action"
        @click.prevent="select(action, i)"
      >
        {{ action.text }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      selected: this.selectedIndex,
    };
  },
  computed: {
    classes() {
      return {
        dropdown_active: this.active,
        dropdown_hidden: !this.active,
      };
    },
  },
  methods: {
    select(action, i) {
      this.selected = i;
      this.$emit("select", action);
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
