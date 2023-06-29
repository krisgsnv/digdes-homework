<template>
  <div id="app">
    <div class="wrapper">
      <Navigation @toggle="onToggle" />
      <component :is="componentNames[index]"></component>
    </div>
  </div>
</template>

<script>
import "@/scss/index.scss";

import Tasks from "@/views/Tasks.vue";
import Projects from "@/views/Projects.vue";
import CreateTask from "@/views/CreateTask.vue";

export default {
  data() {
    return {
      index: 0,
      componentNames: ["Tasks", "Projects", "CreateTask"],
    };
  },
  name: "App",
  components: {
    CreateTask,
    Tasks,
    Projects,
  },
  methods: {
    onToggle(i) {
      this.index = i;
    },
  },
};
</script>
