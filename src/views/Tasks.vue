<template>
  <main class="main">
    <section v-if="tasks.length" class="list-items">
      <router-link
        v-for="task in tasks"
        :key="task._id"
        :to="`tasks/${task._id}`"
      >
        <TaskItem :task="task" />
      </router-link>
    </section>
    <NotFound v-else :message="notFound.message">
      <Button class="not-found__button button_primary button_primary_default">
        {{ notFound.buttonText }}
      </Button>
    </NotFound>
  </main>
</template>

<script>
import { tasks } from "@/common/exampleData.js";

export default {
  data: function () {
    return {
      tasks,
      notFound: {
        message: "Не создана ни одна задача",
        buttonText: "Добавить",
      },
    };
  },
};
</script>
