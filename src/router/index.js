import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/views/Homepage.vue";

const router = createRouter({
  history: createWebHistory("/personal-website/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage,
    },
    {
      path: "/work-experiences",
      name: "work-experiences",
      component: () => import('../views/WorkPage.vue'),
    },
    {
      path: "/contact-me",
      name: "contact-me",
      component: () => import('../views/ContactPage.vue'),
    }
  ],
});

export default router;
