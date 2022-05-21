import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import WatchView from "../views/WatchView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/watch",
    name: "watch",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: WatchView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
