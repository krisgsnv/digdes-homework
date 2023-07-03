<template>
  <div id="app">
    <div class="wrapper">
      <Navigation />
      <router-view />
    </div>
  </div>
</template>

<script>
import "@/scss/index.scss";

export default {
  name: "App",
  // components: {
  //   CreateTask,
  //   Tasks,
  //   Projects,
  // },
};
</script>
