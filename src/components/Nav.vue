/* eslint-disable */
<template>
  <nav class="nav--sticky nav--white-background nav--shadow">
    <ul class="nav__menu global--width">
      <li class="nav__logo">
        <router-link :to="{ path: '/' }">
          Josh Cornau
        </router-link>
      </li>
      <li class="nav__push"></li>
      <li class="nav__item">
        <router-link :to="{ path: '/' }" class="nav__blueline" v-bind:class="{ 'nav__blueline--selected' : '/' == route}">
          Work
        </router-link>
      </li>
      <li class="nav__item" v-for="page in pages" v-bind:key="page.name">
        <router-link
          :to="{ path: page.path }"
          :key="page.name"
           class="nav__blueline"
             v-bind:class="{ 'nav__blueline--selected' : page.path == route}"
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
      
    };
  },
  props: {
     route: {
      type: String,
    },pages:{
      type: Array,
    }
  }
};
</script>

<style lang="css"></style>
