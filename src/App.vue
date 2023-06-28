<template>
  <div id="app">
    <CreateTask />
    <!-- <Profile />
    <Tasks />
    <Projects /> -->
  </div>
</template>

<script>
import "@/scss/index.scss";
//import Profile from "@/views/Profile.vue";
//import Tasks from "@/views/Tasks.vue";
//import Projects from "@/views/Projects.vue";
import CreateTask from "@/views/CreateTask.vue";

export default {
  name: "App",
  components: {
    CreateTask,
    //Profile,
    // Tasks,
    // Projects
  },
};
</script>
