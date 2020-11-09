/* eslint-disable */
<template>
  <nav >
    <div class="sticky">
      <div class="mobileNav">
        <div id="Mobile-Logo">
          <router-link :to="{ path: '/' }" :key="routepath">
            Josh Cornau {{route}}
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
     
    };
  },
  props: {
     route: {
      type: String,
    },
  },
  apollo: {
    categories: gql`
      query Categories {
        categories {
          id
          name
        }
      }
    `,
  },
};
</script>

<style lang="css"></style>
