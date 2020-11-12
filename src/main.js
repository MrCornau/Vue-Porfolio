import Vue from "vue";
import VueApollo from "vue-apollo";
import VueRouter from "vue-router";

import apolloClient from "./vue-apollo";

import App from "./App.vue";

Vue.use(VueApollo);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      components: require("./containers/Articles.vue")
    },
    {
      path: "/article/:id",
      components: require("./containers/Article.vue")
    },
    {
      path: "/category/:id",
      components: require("./containers/Category.vue")
    },
    {
      path: "/testside",
      components: require("./containers/TestSide.vue")
    },
    {
      path: "/blog",
      components: require("./containers/blog.vue")
    },
    {
      path: "/microprojects",
      components: require("./containers/microProjects.vue")
    },
    {
      path: "/about",
      components: require("./containers/about.vue")
    }
  ]
});

new Vue({
  apolloProvider,
  router,
  render: h => h(App)
}).$mount("#app");