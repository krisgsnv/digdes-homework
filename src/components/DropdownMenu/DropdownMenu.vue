<template>
  <ul :class="classes" class="dropdown">
    <li v-for="(action, i) in actions" :key="i">
      <a
        :href="action.link"
        :class="{ dropdown__action_accent: action.accent }"
        class="dropdown__action"
        @click="select(action)"
      >
        {{ action.text }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    classes() {
      return {
        dropdown_active: this.active,
        dropdown_hidden: !this.active,
      };
    },
  },
  methods: {
    select(action) {
      this.$emit("select", action);
    },
  },
  props: {
    actions: Array,
    active: Boolean,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
