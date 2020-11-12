/* eslint-disable */
<template>
  <nav class="sticky white-background shadow">
    <ul class="menu">
      <li class="logo">
        <router-link :to="{ path: '/' }">
          Josh Cornau
        </router-link>
      </li>
      <li class="push"></li>
      <li class="item">
        <router-link :to="{ path: '/' }" class="blueline" v-bind:class="{ 'blueline-selected' : '/' == route}">
          Work
        </router-link>
      </li>
      <li class="item" v-for="page in pages" v-bind:key="page.name">
        <router-link
          :to="{ path: page.path }"
          :key="page.name"
           class="blueline"
             v-bind:class="{ 'blueline-selected' : page.path == route}"
        >
          {{ page.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: "Nav",
  data() {
    return {
      pages:[{path:'/blog',name:'Blog'},{path:'/microprojects',name:'Micro-Projects'},{path:'/about',name:'about'}]
    };
  },
  props: {
     route: {
      type: String,
    },
  }
};
</script>

<style lang="css"></style>
