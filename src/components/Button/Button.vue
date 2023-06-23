<template>
  <button class="button" type="button">{{ text }}</button>
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
