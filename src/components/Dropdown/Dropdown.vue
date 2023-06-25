<template>
  <ul class="dropdown">
    <li v-for="action in actions" :key="action.text" class="dropdown__action">
      <a :href="action.link">{{ action.text }}</a>
    </li>
  </ul>
</template>

<script>
import "./style.scss";
export default {
  data: function () {
    return {};
  },
  props: {
    actions: Array,
  },
};
</script>
