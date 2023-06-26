<template>
  <div id="app">
    <Profile />
    <!-- <Tasks />
    <Projects /> -->
  </div>
</template>

<script>
import "@/scss/index.scss";
import Profile from "@/views/Profile.vue";
//import Tasks from "@/views/Tasks.vue";
//import Projects from "@/views/Projects.vue";

export default {
  name: "App",
  components: {
    Profile,
    // Tasks,
    // Projects
  },
};
</script>
