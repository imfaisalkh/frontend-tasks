import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/css/task-1",
      name: "css-task-1",
      component: () => import("../views/css/Task-1.vue"),
    },
    {
      path: "/css/task-2",
      name: "css-task-2",
      component: () => import("../views/css/Task-2.vue"),
    },
    {
      path: "/css/task-3",
      name: "css-task-3",
      component: () => import("../views/css/Task-3.vue"),
    },
  ],
});

export default router;
