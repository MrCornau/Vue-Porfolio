<template>
  <div id="app">
    <div>
    <MobileNav v-if="mobileView" v-bind:route="$route.fullPath" v-bind:pages="pages"/>
    </div>
  <div>
    <Nav v-if="!mobileView" v-bind:route="$route.fullPath" v-bind:pages="pages"/>
    </div>
    
    <router-view :key="$route.fullPath" ></router-view>
    
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
      pages:[{path:'/blog',name:'Blog'},{path:'/microprojects',name:'Micro-Projects'},{path:'/about',name:'about'}]
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
