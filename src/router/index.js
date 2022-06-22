import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import OutputView from "../views/OutputView.vue"
import Uploadtext from "../views/Upload-text.vue"
import LogInView from "../views/LogInView.vue"
import UserProffile from "../views/UserProffile.vue"

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
    component: AboutView,
  },
  {
    path: "/output",
    name: "Output",
    component: OutputView,
  },
  {
    path: "/Upload",
    name: "Uploadtext",
    component: Uploadtext,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogInView,
  },
  {
    path: "/UserProffile",
    name: "UserProffile",
    component: UserProffile,
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
