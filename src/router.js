import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    name: "layout",
    component: () => import("./pages"),
    redirect: {
      name: "example-page",
    },
    children: [
      {
        path: "/example-page",
        name: "example-page",
        component: () => import("./pages/example")
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;