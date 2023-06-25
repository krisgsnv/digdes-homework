<template>
  <Fragment>
    <Navigation />
    <Main>
      <div v-if="tasks.length" class="list-items">
        <TaskItem v-for="task in tasks" :key="task._id" :task="task" />
      </div>
      <ProjectsEmpty v-else />
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
  data: function () {
    return {
      tasks: [
        {
          status: "IN_PROCESS",
          author: "Иванов И.И.",
          authorEdited: "Петров В.В.",
          dateCreated: "1 час назад",
          dateEdited: "1 час назад",
          _id: "6495884dee9f515ec4443a7a",
          name: "New Task Name",
          projectCode: "6495884",
          number: "1",
        },
        {
          status: "IN_PROCESS",
          author: "Иванов И.И.",
          authorEdited: "Петров В.В.",
          dateCreated: "1 час назад",
          dateEdited: "1 час назад",
          _id: "6495884dee9f515ec4443a7",
          name: "New Task Name",
          projectCode: "6495884",
          number: "2",
        },
        {
          status: "DRAFT",
          author: "Иванов И.И.",
          authorEdited: "Петров В.В.",
          dateCreated: "1 час назад",
          dateEdited: "1 час назад",
          _id: "6495884dee9f515ec4443",
          name: "New Task Name",
          projectCode: "6495884",
          number: "3",
        },
        {
          status: "DRAFT",
          author: "Иванов И.И.",
          authorEdited: "Петров В.В.",
          dateCreated: "1 час назад",
          dateEdited: "1 час назад",
          _id: "6495884dee9f515ec444",
          name: "New Task Name",
          projectCode: "6495884",
          number: "4",
        },
        {
          status: "DRAFT",
          author: "Иванов И.И.",
          authorEdited: "Петров В.В.",
          dateCreated: "1 час назад",
          dateEdited: "1 час назад",
          _id: "6495884dee9f515ec44",
          name: "New Task Name",
          projectCode: "6495884",
          number: "5",
        },
      ],
    };
  },
  // created() {
  //   this.getTasks();
  // },
  // methods: {
  //   getTasks: function () {
  //     getItemList("tasks", { limit: 5 }).then((data) => {
  //       this.tasks = data.tasks;
  //     });
  //   },
  // },
  components: {
    Fragment,
    Main,
    ProjectsEmpty,
    Navigation,
    TaskItem,
  },
};
</script>
