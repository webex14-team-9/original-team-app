import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import OutputView from "../views/OutputView.vue"
import Uploadtext from "../views/Upload-text.vue"
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/Upload",
    name: "Uploadtext",
    component: Uploadtext,
  },
  {
    path: "/Output",
    name: "Output",
    component: OutputView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
export default router
