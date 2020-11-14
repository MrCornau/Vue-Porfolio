/* eslint-disable */
<template>
  <nav >
    <div class="nav--sticky">
      <div class="nav-mobile">
        <div id="Mobile-Logo">
          <router-link :to="{ path: '/' }" >
            Josh Cornau <span class="nav-indicator-mobile">{{route.replace("/","")}}</span>
          </router-link>
        </div>
        <div class="hamburger-nav">
        <button class="hamburger-nav hamburger hamburger--collapse " type="button" @click="showNav = !showNav" v-bind:class="{ 'is-active': showNav }">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        </div>
      </div>
    </div>
    <div
      class="menue-mobile nav--shadow"
      v-bind:class="{ mobileMenueFolded: showNav }"
    >
      <ul class="ul-mobile">
        <li class="item-mobile" 
    

        @click="showNav = !showNav;" >
          <router-link :to="{ path: '/' }" class="nav__blueline" v-bind:class="{ 'nav__blueline--selected' : '/' == route}"> Work</router-link>
        </li>
        <li
          class="item-mobile"
          v-for="page in pages"
          v-bind:key="page.name"
          @click="showNav = !showNav"
            
        >
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
    </div>
  </nav>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Nav",
  data() {
    return {
      categories: [],
      showNav: false,
      page:0
    };
  },
  props: {
     route: {
      type: String,
    },pages:{
      type: Array,
    }
  },
  methods:{
    getIndicatorText(route, categories){
      if(route === '/'){return 'work'}
      else{
        console.log(route.match(/\d+/)[0]);
        return categories.[route.match(/\d+/)[0]].name;
      }
    }
  },
  apollo: {
    categories: gql`
      query Categories {
        categories {
          id
          count
          name
        }
      }
    `,
  },
};
</script>

<style lang="css"></style>
