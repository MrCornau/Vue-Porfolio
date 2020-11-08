<template>
  <div id="app">
    <div id="navigation-icon" v-if="mobileView"
      @click="showNav = !showNav">
      <i class="fas fa-bars" />
    </div>
    <MobileNav v-if="showNav" />
    <Nav v-if="!mobileView" />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import MobileNav from "./components/MobileNav"

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
      this.mobileView = window.innerWidth <= 600;
    }
  },
  created(){
    this.handleView();
    window.addEventListener('resize',this.handleView);
  },


  components: { Nav,MobileNav },
};
</script>
