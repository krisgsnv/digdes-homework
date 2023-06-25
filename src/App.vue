<template>
  <div id="app">
    <Tasks />
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
