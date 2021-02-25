/* eslint-disable */
<template>
  <nav>
    <div class=" nav-mobile--sticky">
      <div class="nav-mobile">
        <div id="nav-mobile__logo">
          <router-link :to="{ path: '/' }" >
            Josh Cornau <span  v-if="!skipQuery&&article" class="nav-mobile__indicator-mobile">/ {{article.title}}</span>
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
      class="nav-mobile__menue-mobile nav--shadow"
      v-bind:class="{ 'nav-mobile--folded': showNav }"
    >
      <ul class="nav-mobile__ul">
        <li class="nav-mobile__item" 
    

        @click="showNav = !showNav;" >
          <router-link :to="{ path: '/' }" class="nav__blueline" v-bind:class="{ 'nav__blueline--selected' : '/' == route}"> Work</router-link>
        </li>
        <li
          class="nav-mobile__item"
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
      page:0,
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id,
      skipQuery: true
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
       // console.log(route.match(/\d+/)[0]);
        return categories[route.match(/\d+/)[0]].name;
      }
    },
    checkRoute(){
        console.log(this.$route.params.id)
        if(this.$route.params.id){
          this.skipQuery = false;
      
        }
        else{
          this.skipQuery = true;
        
        }
    }
  },
  beforeMount(){
    this.checkRoute()
   
  }
  ,
   apollo: {
    article: {
      
      query: gql`
        query Articles($id: ID!) {
          article(id: $id) {
            id
            title
          }
        }
      `,
      variables() {
        return {
          id: this.routeParam,
        };
      },
    skip () {
      return this.skipQuery
    },
    },
  }
};
</script>

<style lang="css"></style>
