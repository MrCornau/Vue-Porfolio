<template>
  <div id="app">
    <Nav />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: { Nav }
};
</script>
