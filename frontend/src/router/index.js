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
    name: "userFeed",
    path: "/userfeed/:id",
    component: () => import("@/views/UserFeed.vue")
  },
  {
    name: "userProfile",
    path: "/userprofil/:id",
    component: () => import("@/views/UserProfile.vue")
  }
  ],
  mode: "history"
});
