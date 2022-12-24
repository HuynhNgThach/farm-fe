import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/EncodeTool.vue"),
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
