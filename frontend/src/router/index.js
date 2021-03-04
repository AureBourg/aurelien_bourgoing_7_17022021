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
    name: "signup",
    path: "/signup",
    component: () => import("@/views/Signup.vue")
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
