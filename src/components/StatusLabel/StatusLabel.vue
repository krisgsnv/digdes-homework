<template>
  <span class="status-label">{{ text }}</span>
</template>

<script>
import "./style.scss";
export default {
  data: function () {
    return {};
  },
  props: {
    text: String,
  },
};
</script>
