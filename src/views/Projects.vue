<template>
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
</template>

<script>
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
};
</script>
