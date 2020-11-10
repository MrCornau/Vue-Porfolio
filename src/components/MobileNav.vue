/* eslint-disable */
<template>
  <nav >
    <div class="sticky">
      <div class="mobileNav">
        <div id="Mobile-Logo">
          <router-link :to="{ path: '/' }" >
            Josh Cornau {{getIndicatorText(route, categories)}}
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
      class="menue-mobile shadow"
      v-bind:class="{ mobileMenueFolded: showNav }"
    >
      <ul class="ul-mobile">
        <li class="item-mobile" 
    

        @click="showNav = !showNav;" >
          <router-link :to="{ path: '/' }" class="blueline" v-bind:class="{ 'blueline-selected' : '/' == route}"> Work</router-link>
        </li>
        <li
          class="item-mobile"
          v-for="category in categories"
          v-bind:key="category.id"
          @click="showNav = !showNav"
            
        >
          <router-link
            :to="{ path: '/category/' + category.id }"
            :key="category.id"
            class="blueline"
             v-bind:class="{ 'blueline-selected' : '/category/' + category.id == route}"
           
          >
            {{ category.name }}
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
    },
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
