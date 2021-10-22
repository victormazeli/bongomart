import Home from '../pages/Home.vue'
import Dashboard from '../pages/users/dashboard.vue'
import Listings from '../pages/ads/index.vue'
import PostAd from '../pages/ads/postad.vue'
import Login from '../pages/auth/Login.vue'
import Register from '../pages/auth/SignUp.vue'
import Detail from '../pages/ads/detail.vue'

const routes = [

  { path: "/", component: Home, name: "Home" },
  { path: "/dashboard", component: Dashboard, name: "Dashboard" },
  { path: "/listings", component: Listings, name: "Listings" },
  { path: "/listing-detail/:id", component: Detail, name: "Listing-detail"},
  { path: "/postad", component: PostAd, name: "PostAd" },
  { path: "/login", component: Login, name: "Login" },
  { path: "/signUp", component: Register, name: "Register" },

]

export default routes
