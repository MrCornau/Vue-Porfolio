<template>
  <div >
    <div v-if="microProject">
    <div v-if="!microProject.BlogVideolink" class="article-detail__header-image">
      <img
        v-if="microProject.blodHeaderImage"
        class=""
        :src="api_url + microProject.blodHeaderImage.url"
        alt="nothing"
      />
    </div> 
    <div v-if="microProject.BlogVideolink" class="article-detail__header-video" v-bind:style="{ 'background-color': white}">
    <div class="Video-Player--Container">
      <iframe :src="microProject.BlogVideolink" class="Video-Player" :width="playerWidth" :height="playerHeight" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    </div>
    <div class="article-detail__container article-detail__width">
      <div class="article-detail__heading">
        <h1 v-scrollanimation>{{ microProject.title }}</h1>
      </div>
    </div>
    <div v-scrollanimation  class="MarkdownWrapper  " v-if="microProject.MoreInfoContent">
      <li class="impression--Information ">{{microProject.publishedAt}}</li>
      <ul v-for="Collaborators in microProject.MoreInfoContent.TeamMates.Collaborators" :key="Collaborators.id" class="impression--Information ">
            <li class="blue"><a :href="'https://'+Collaborators.Website"  target="_blank" >  / {{Collaborators.Name}}</a></li>
      </ul>
    <div v-for="content in microProject.AAMicroContent" :key="content.id">
      <div  class="" v-if="content.AATextContainer" >
        <vue-markdown-it  class="MarkdownWrapper-Content margin-bottom--M"
          :content="content.AATextContainer"
        />
      </div>
      <div  class="" v-if="content.ImageContainer_Micro">
        <img
        v-if="microProject.blodHeaderImage"
        class="MarkdownWrapper-Content margin-bottom--M"
        :src="api_url + content.ImageContainer_Micro.url"
        alt="nothing"
      />
      </div>
    </div>

    </div>
  
    <MoreArticles class="margin-top--XL margin-bottom--XL" :title="microProject.title" :routeto="'/impressions/'" ></MoreArticles>
<!-- <MoreInformation v-if="microProject.MoreInfoContent" :Content="microProject.MoreInfoContent" :articleColor="'#374cff'" class="margin-bottom--XL"/> -->
    
  </div>
</template>

<script>
var moment = require("moment");
import gql from "graphql-tag";
import VueMarkdownIt from "markdown-it-vue";
import MoreArticles from "../components/MoreArticles.vue"
// import MoreInformation from "../containers/ArticleDetail/MoreInformation"
//  import { vueVimeoPlayer } from 'vue-vimeo-player'

export default {
  data() {
    return {
      microProject: [],
      moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id,
      playerWidth:840,
      playerHeight:540,
      options: {
 image: {
    hAlign: 'right',
    size:'x100',
  }
      
    }
    }
  },
  components: {
VueMarkdownIt,
MoreArticles
  // MoreInformation,
  },

  methods: {
    handleView() {
      this.playerWidth = window.innerWidth*0.95;
      this.playerHeight = window.innerWidth*0.53125*0.95;
      console.log(this.$route.params.id,)
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },

  apollo: {
    microProject: {
      query: gql`
         query microProject($id: ID!) {
          microProject(id: $id){
           
            title
            content
            image{url}
            publishedAt
            description
            Tags
            publishedAt
           BlogVideolink
            blodHeaderImage{url}
            AAMicroContent{
     ... on ComponentMoreInfoTextMicroprojectcontent{AATextContainer}
      ... on ComponentMoreInfoImageMicroprojectcontent{ImageContainer_Micro{url}}

            
    }

     MoreInfoContent{
             TeamMates
        }}}
      `, variables() {
        return {
          id: this.routeParam,
        };
      }
    },
  }
};
</script>

<style scoped>

.before-enter{
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.7s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}


.impression--Information {
  display: inline;
  list-style-type: none;
  padding-right: 5px;
  float: left;
  margin-bottom: 10px;
  color: blue !important;
}
.blue{
    color: blue !important;
}


.MarkdownWrapper{
  margin: 50px auto 0 auto ;
  max-width: 40%;
  
}

.MarkdownWrapper-Content {
  width: 100%;
 overflow: hidden;
}

.ImageSize *{
  width: 10%;
  border: solid 2px firebrick;

}






.Video-Player--Container{
    margin: auto;
    height: 100% !important;
}

.article-detail__header-video{
   margin-top: 0px;
  display: flex;
}

@media only screen and (max-width: 600px) {
.Video-Player--Container{
    padding-top: 70px;
}
.MarkdownWrapper{
  
  max-width: 90%;
  
}
}
@media only screen and (min-width: 600px) and (max-width: 1200px) and (orientation: portrait) {
  .Video-Player--Container{
    padding-top: 80px;
}
.MarkdownWrapper{
  
  max-width: 70%;
  
}
}

@media only screen and (min-width: 900px) and (max-width: 1200px) and (orientation: landscape) {
    .Video-Player--Container{
    padding-top: 80px;
}
.MarkdownWrapper{
  
  max-width: 50%;
  
}
}
@media only screen and (min-width: 1200px) {
     .Video-Player--Container{
    padding-top: 80px;
}
}
@media only screen and (min-width: 1900px) {
     .Video-Player--Container{
    padding-top: 80px;
}
.MarkdownWrapper{
  
  max-width: 30%;
  
}}



</style>
