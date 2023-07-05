<template>
  <main class="main">
    <div v-if="tasks.length">
      <SearchBar />
      <div class="list-items">
        <TaskItem v-for="task in tasks" :key="task._id" :task="task" />
      </div>
    </div>
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
