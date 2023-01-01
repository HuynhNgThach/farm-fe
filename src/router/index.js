import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true,
  routes: [
    {
      path: "/",
      component: () => import("../views/AppLayout.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "/encode",
          name: "encode",

          component: () => import("../views/EncodeTool.vue"),
        },
        {
          path: "/jsonview",
          name: "jsonview",

          component: () => import("../views/JsonView.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("../views/AppLayout.vue"),
      children: [
        {
          path: "",
          name: "notFound",
          component: () => import("../views/NotFound.vue"),
        },
      ],
    },
  ],
});

export default router;
