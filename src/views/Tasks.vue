<template>
  <Fragment>
    <Navigation />
    <Main>
      <ProjectsEmpty />
    </Main>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Main from "@/components/Main/Main.vue";
import ProjectsEmpty from "@/components/ProjectsEmpty/ProjectsEmpty.vue";
import Navigation from "@/components/Navigation/Navigation.vue";

export default {
  components: {
    Fragment,
    Main,
    ProjectsEmpty,
    Navigation,
  },
};
</script>
