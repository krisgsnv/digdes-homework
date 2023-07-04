import Vue from "vue";
import VueRouter from "vue-router";

import Tasks from "@/views/Tasks.vue";
import TaskDetail from "@/views/TaskDetail.vue";
import NotFound from "@/views/NotFound.vue";
import Auth from "@/views/Auth.vue";
import UsersList from "@/views/UsersList.vue";
import Projects from "@/views/Projects.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks,
  },
  {
    path: "/tasks/:id",
    name: "TaskDetail",
    component: TaskDetail,
    props: true,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/users",
    name: "UsersList",
    component: UsersList,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("auth")) {
        next();
      } else {
        next("auth");
      }
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/",
    redirect: { name: "Tasks" },
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
