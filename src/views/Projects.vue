<template>
  <div class="container">
    <Navigation />
    <main class="main">
      <section v-if="projects.length" class="list-items">
        <ProjectItem
          v-for="project in projects"
          :key="project._id"
          :project="project"
        />
      </section>
      <NotFound v-else :message="notFound.message">
        <Button class="not-found__button button_primary button_primary_default">
          {{ notFound.buttonText }}
        </Button>
      </NotFound>
    </main>
  </div>
</template>

<script>
import NotFound from "@/components/NotFound/NotFound.vue";
import Navigation from "@/components/Navigation/Navigation.vue";
import ProjectItem from "@/components/ProjectItem/ProjectItem.vue";
import Button from "@/components/Button/Button.vue";

import { projects } from "@/common/exampleData.js";

export default {
  data: function () {
    return {
      projects,
      notFound: {
        message: "Не создан ни один проект",
        buttonText: "Добавить",
      },
    };
  },
  components: {
    NotFound,
    Navigation,
    ProjectItem,
    Button,
  },
};
</script>
