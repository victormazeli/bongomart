import Home from '../pages/Home.vue'
import Dashboard from '../pages/Dashboard.vue'

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/dashboard", component: Dashboard, name: "Dashboard" }
]

export default routes
