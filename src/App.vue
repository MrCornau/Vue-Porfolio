<template>
  <div id="app" v-bind:class="{'dark-background': '/about' == $route.fullPath,'light-background': '/about' != $route.fullPath}" >
    <div>
    <MobileNav v-if="mobileView" :key="$route.params.id" v-bind:route="$route.fullPath" v-bind:pages="pages"/>
    </div>
  <div>
    <Nav v-if="!mobileView" :key="$route.params.id"  v-bind:route="$route.fullPath" v-bind:pages="pages"/>
    </div>
    
    <router-view :key="$route.fullPath" ></router-view>
    <Footer/>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer.vue"

export default {
  name: "App",
  data: () => {
    return {
      mobileView: true,
      showNav: false,
      pages:[{path:'/impressions',name:'Impressions'},{path:'/about',name:'about'}]
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

  components: { Nav, MobileNav, Footer },
};
</script>
<style scoped>
.light-background{
  background-color: white;
  transition: 0.5s cubic-bezier(.52,.49,.19,1.04);
}

.dark-background{ 
  background-color: #1C1A1B;
  transition: 0.5s cubic-bezier(.52,.49,.19,1.04);
}
</style>