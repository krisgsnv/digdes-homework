<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use :xlink:href="href" />
  </svg>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  props: {
    href: String,
  },
};
</script>
