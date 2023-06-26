<template>
  <section class="not-found">
    <p class="not-found__message">{{ message }}</p>
    <slot />
  </section>
</template>

<script>
import "./style.scss";

export default {
  props: {
    message: String,
  },
};
</script>
