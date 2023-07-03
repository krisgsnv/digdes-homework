<template>
  <span class="status-label" :class="classes">{{ text }}</span>
</template>

<script>
import { statusName } from "@/common/statusName.js";

export default {
  props: {
    status: String,
  },
  computed: {
    text() {
      return statusName[this.status];
    },
    classes() {
      return `status-label_${this.status.split("_").join("-").toLowerCase()}`;
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
