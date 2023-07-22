import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/",
    name: "example-page",
    component: () => import("./pages/example")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;