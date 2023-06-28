<template>
  <svg
    :width="width"
    :height="height"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use :xlink:href="href" />
  </svg>
</template>

<script>
export default {
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
