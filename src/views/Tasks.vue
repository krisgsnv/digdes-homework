<template>
  <Fragment>
    <Navigation />
    <Main>
      <ProjectsEmpty />
      <TaskItem />
    </Main>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Main from "@/components/Main/Main.vue";
import ProjectsEmpty from "@/components/ProjectsEmpty/ProjectsEmpty.vue";
import Navigation from "@/components/Navigation/Navigation.vue";
import TaskItem from "@/components/TaskItem/TaskItem.vue";

export default {
  components: {
    Fragment,
    Main,
    ProjectsEmpty,
    Navigation,
    TaskItem,
  },
};
</script>
