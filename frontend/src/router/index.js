import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
  {
    name: "home",
    path: "/",   
    component: () => import("@/views/Home.vue")
  },
  {
    name: "register",
    path: "/registerUser",
    component: () => import("@/views/Register.vue")
  },
  {
    name: "feed",
    path: "/userFeed",
    component: () => import("@/views/UserFeed.vue")
  },
  {
    name: "profile",
    path: "/userProfile",
    component: () => import("@/views/UserProfile.vue")
  }
  ]
});
