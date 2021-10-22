import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes/route'
import firebase from 'firebase/app'
import axios from 'axios'
import store from './store/index'
import VuePaginate from 'vue-paginate'
// import { BootstrapVue } from 'bootstrap-vue'

// // Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// import Flutterwave from  'flutterwave-vue-v3'


Vue.config.productionTip = false

Vue.use(VueRouter);
// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
Vue.use(VuePaginate);
Vue.prototype.$http = axios;
// Vue.use(Flutterwave, { publicKey: 'FLWPUBK-4a387f1c9037911ac35f7b8d330ccbb4-X' } )

const router = new VueRouter({
  mode: 'history',
  routes 
});

const firebaseConfig = {
  apiKey: "AIzaSyCHg4E4SDqK5T31JJ0KQX5XiiwnjQ0IFcg",
  authDomain: "bongomart-cf46b.firebaseapp.com",
  projectId: "bongomart-cf46b",
  storageBucket: "bongomart-cf46b.appspot.com",
  messagingSenderId: "392796188922",
  appId: "1:392796188922:web:d1b44411bb7dede9519943",
  measurementId: "G-965GXZKKYY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
