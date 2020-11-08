<template>
  <div id="app">
    <nav class="sticky">
      <div class="mobileNav">
      <div id="Mobile-Logo">
        <router-link :to="{ path: '/' }">
          Josh Cornau
        </router-link>
      </div>
      <div id="navigation-icon" v-if="mobileView" @click="showNav = !showNav">
        <i class="fas fa-bars" />
      </div>
      </div>
    </nav>
    <MobileNav v-if="showNav" />
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
