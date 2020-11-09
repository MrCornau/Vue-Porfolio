<template>
  <div id="app">
    <MobileNav v-if="mobileView" v-bind:route="$route.fullPath"/>
    <Nav v-if="!mobileView" />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import MobileNav from "./components/MobileNav";

export default {
  name: "App",
  data: () => {
    return {
      mobileView: true,
      showNav: false,
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 740;
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },

  components: { Nav, MobileNav },
};
</script>
