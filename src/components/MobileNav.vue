/* eslint-disable */
<template>
  <nav>
    <div class=" nav-mobile--sticky" v-bind:class="{'nav-big-black-background': '/about' == route,'nav-big--white-background': '/about' != route}">
      <div class="nav-mobile">
        <div id="nav-mobile__logo ">
          <router-link :to="{ path: '/' }" class="base-font-color">
            Josh Cornau 
            <span  v-if="!skipQuery&&article" class="nav-mobile__indicator-mobile">/ {{article.title}}</span>
            <span  v-if="!skipQueryBlog&&microProject" class="nav-mobile__indicator-mobile">/ {{microProject.title}}</span>
          </router-link>
        </div>
        <div class="hamburger-nav">
        <button class="hamburger-nav hamburger hamburger--collapse" type="button" @click="showNav = !showNav" v-bind:class="{ 'is-active': showNav }" >
          <span class="hamburger-box">
            <span class="hamburger-inner hamburger-inner--light" v-bind:class="{'hamburger-inner--dark': '/about' == route,'hamburger-inner--light': '/about' != route}"></span>
          </span>
        </button>
        </div>
      </div>
    </div>
    <div
      class="nav-mobile__menue-mobile nav--shadow"
      v-bind:class="{ 'nav-mobile--folded': showNav ,'nav-big-black-background': '/about' == route,'nav-big--white-background': !route.includes('/about')}"
    >
      <ul class="nav-mobile__ul">
        <li class="nav-mobile__item" 
    

        @click="showNav = !showNav;" >
          <router-link :to="{ path: '/' }" class="nav__blueline base-font-color" v-bind:class="{ 'nav__blueline--selected' : '/' == route ||route.includes('/article') }"> Work</router-link>
        </li>
        <li
          class="nav-mobile__item"
          @click="showNav = !showNav"
            
        >
          <router-link
            :to="{ path: '/impressions' }"
            :key="'impressions'"
            class="nav__blueline base-font-color"
             v-bind:class="{ 'nav__blueline--selected' :  route.includes('/impressions'),'nav-blueline--dark': '/about' == route,'nav-blueline--white': '/about' != route}"
           
          >
            Blog-Post
          </router-link>
        </li>
        <li
          class="nav-mobile__item"
          @click="showNav = !showNav"
            
        >
          <router-link
            :to="{ path: '/about' }"
            :key="'about'"
            class="nav__blueline base-font-color"
             v-bind:class="{ 'nav__blueline--selected' :  '/about' == route,'nav-blueline--dark': '/about' == route,'nav-blueline--white': '/about' != route}"
           
          >
            About
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
      skipQuery: true,
      skipQueryBlog:true
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
        if(this.$route.params.id && this.route.includes('article')){
          this.skipQuery = false;
          this.skipQueryBlog = true;
        }
        else if(this.$route.params.id && this.route.includes('impressions')){
            this.skipQuery = true;
            this.skipQueryBlog = false;
        }
        else{
          this.skipQuery = true;
          this.skipQueryBlog = true;
        }
    },
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
    }

    ,
  microProject: {
      query: gql`
         query microProject($id: ID!) {
          microProject(id: $id){
           
            title
            id
          }
        }
      `,
      variables() {
        return {
          id: this.routeParam,
        };
      },
    skip () {
      return this.skipQueryBlog
    },
    }
  }
};
</script>

<style lang="css"></style>

