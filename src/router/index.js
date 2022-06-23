import { createRouter, createWebHistory } from "vue-router"
import AboutView from "../views/AboutView.vue"
import LogInView from "../views/LogInView.vue"
import UploadText from "../views/Upload-text.vue"
import HomeView from "../views/HomeView.vue"

const routes = [
  {
    path: "/",
    name: "Home",
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
    path: "/my-page",
    name: "MyPage",
    component: AboutView,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogInView,
  },
  {
    path: "/Upload",
    name: "UploadText",
    component: UploadText,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
export default router
