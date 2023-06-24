<template>
  <div id="app">
    <Tasks />
    <svg-icon icon-class="logo_in" class-name="sidebar-logo"></svg-icon>
  </div>
</template>

<script>
import "@/scss/index.scss";
import Tasks from "@/views/Tasks.vue";

export default {
  name: "App",
  components: {
    Tasks,
  },
};
</script>
