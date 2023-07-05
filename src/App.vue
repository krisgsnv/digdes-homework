<template>
  <div id="app">
    <div class="wrapper">
      <Navigation />
      <Tasks />
    </div>
  </div>
</template>

<script>
import "@/scss/index.scss";
import Tasks from "@/views/Tasks.vue";

export default {
  data() {
    return {
      values: [{ text: "Один" }, { text: "Два" }],
      model: {
        checkbox: true,
        radio: "Оин",
        input: 234,
      },
    };
  },
  methods: {
    log() {
      console.log(this.model.radio);
    },
  },
  name: "App",
  components: {
    // CreateTask,
    Tasks,
    // Projects,
  },
};
</script>
