import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Index
    {
      path: "/",
      name: "index",
      component: () => import("../views/Index.vue"),
    },

    // CSS Routes
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

    // JS Routes
    {
      path: "/js/arrays",
      name: "js-arrays",
      component: () => import("../views/js/Arrays.vue"),
    },
    {
      path: "/js/promises",
      name: "js-promises",
      component: () => import("../views/js/Promises.vue"),
    },
    {
      path: "/js/web-storage",
      name: "js-web-storage",
      component: () => import("../views/js/WebStorage.vue"),
    },
    {
      path: "/js/misc",
      name: "js-misc",
      component: () => import("../views/js/Misc.vue"),
    },

    // Vue
    {
      path: "/vue/task-1",
      name: "vue-task-1",
      component: () => import("../views/vue/Task-1.vue"),
    },
    {
      path: "/vue/task-2",
      name: "vue-task-2",
      component: () => import("../views/vue/Task-2.vue"),
    },
    {
      path: "/vue/task-3",
      name: "vue-task-3",
      component: () => import("../views/vue/Task-3.vue"),
    },
  ],
});

export default router;
