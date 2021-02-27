import Vue from "vue";
import VueApollo from "vue-apollo";
import VueRouter from "vue-router";

import apolloClient from "./vue-apollo";

import App from "./App.vue";

import ScrollAnimation from './directives/scrollanimation'

Vue.use(VueApollo);
Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.directive('scrollanimation', ScrollAnimation);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      components: require("./containers/Work.vue")
    },
    {
      path: "/article/:id",
      components: require("./containers/Article.vue")
    },
    {
      path: "/impressions/:id",
      components: require("./containers/BlogDetail.vue")
    },
    {
      path: "/testside",
      components: require("./containers/TestSide.vue")
    },
    {
      path: "/impressions",
      components: require("./containers/MicroProjects.vue")
    },
    {
      path: "/about",
      components: require("./containers/About.vue")
    },
    {
      path: "/imprint",
      components: require("./containers/imprint.vue")
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

new Vue({
  apolloProvider,
  router,
  render: h => h(App)
}).$mount("#app");