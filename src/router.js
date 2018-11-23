import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/manager",
      name: "manager",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Manager_salarie.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/salarie_info",
      name: "salarie_info",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Salarie_info.vue")
    },
    {
      path: "/salarie_calendar",
      name: "salarie_calendar",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Salarie_calendar.vue")
    }
  ]
});
