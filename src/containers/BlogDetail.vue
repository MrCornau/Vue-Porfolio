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
        <h1>{{ microProject.title }}</h1>
      </div>
    </div>
    <div class="MarkdownWrapper">
       <vue-markdown-it class="ImageSize"
          v-if="microProject.content"
          :content="microProject.content"
          :options="this.options"
        />
    </div>
  </div>
</template>

<script>
var moment = require("moment");
import gql from "graphql-tag";
import VueMarkdownIt from "markdown-it-vue";
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
VueMarkdownIt
 
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
          }
        }
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

.MarkdownWrapper{
  margin: 50px auto 0 auto ;
  max-width: 40%;
  
}

.ImageSize {
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
}
@media only screen and (min-width: 600px) and (max-width: 1200px) and (orientation: portrait) {
  .Video-Player--Container{
    padding-top: 80px;
}
}

@media only screen and (min-width: 900px) and (max-width: 1200px) and (orientation: landscape) {
    .Video-Player--Container{
    padding-top: 80px;
}
}
@media only screen and (min-width: 1200px) {
     .Video-Player--Container{
    padding-top: 80px;
}
}


</style>
