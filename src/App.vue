<template>
  <div id="app">
    <Projects />
  </div>
</template>

<script>
import "@/scss/index.scss";
//import Button from "@/components/Button/Button.vue";
//import Tasks from "@/views/Tasks.vue";
import Projects from "@/views/Projects.vue";

export default {
  name: "App",
  components: {
    Projects,
  },
};
</script>
