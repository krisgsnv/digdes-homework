<template>
  <svg
    :width="width"
    :height="height"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    v-on="listeners"
  >
    <use :xlink:href="href" />
  </svg>
</template>

<script>
export default {
  computed: {
    listeners() {
      return {
        ...this.$listeners,
      };
    },
  },
  props: {
    href: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
  },
};
</script>
