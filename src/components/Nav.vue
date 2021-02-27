/* eslint-disable */
<template>
  <nav class="nav-big--sticky nav-big--white-background nav--shadow" v-bind:class="{'nav-big-black-background': '/about' == route,'nav-big--white-background': '/about' != route}">
    <ul class="nav-big__menu global--width">
      <li class="nav-big__logo">
        <router-link :to="{ path: '/' }" class="base-font-color">
          Josh Cornau 
          <span  v-if="!skipQuery&&article" class="nav-mobile__indicator-mobile">/ {{article.title}}</span>
          <span  v-if="!skipQueryBlog&&microProject" class="nav-mobile__indicator-mobile">/ {{microProject.title}}</span>
        </router-link>
      </li>
      <li class="nav-big__push"></li>
      <li class="nav-big__item">
        <router-link :to="{ path: '/' }" class="nav__blueline nav-blueline--white base-font-color" v-bind:class="{ 'nav__blueline--selected' : '/' == route || route.includes('article')}">
          Work
        </router-link>
      </li>
      <li class="nav-big__item" >
        <router-link
          :to="{ path: '/impressions' }"
          :key="'impressions'"
           class="nav__blueline base-font-color"
            
             v-bind:class="{ 'nav__blueline--selected' : route.includes('/impressions'),  'nav-blueline--dark': '/about' == route,'nav-blueline--white': '/about' != route}">
         Blog-Posts
        </router-link>
       </li>
       <li class="nav-big__item" >
  <router-link
          :to="{ path: '/about' }"
          :key="'About'"
           class="nav__blueline base-font-color"
            
             v-bind:class="{ 'nav__blueline--selected' : '/about' == route,  'nav-blueline--dark': '/about' == route,'nav-blueline--white': '/about' != route}">
          About
        </router-link>
       </li>
      
     
    </ul>
  </nav>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Nav",
  data() {
    return {
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
    logID(){
    // console.log(this.routeParam)
    // console.log(this.$route.path)

    }
  },
  beforeMount(){
    this.checkRoute()
  },
  mounted(){
    this.logID()
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

<style lang="css">


.About-Page{
  background-color: chartreuse !important;
}

</style>
