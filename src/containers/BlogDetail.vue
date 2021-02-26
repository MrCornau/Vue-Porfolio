<template>
  <div >

<h1>hallloooo</h1>
<h1>hallloooo</h1>
<h1>hallloooo</h1>
  <div v-if="this.microProject.title">
{{this.microProject}}
  </div>

  </div>
</template>

<script>
var moment = require("moment");
import gql from "graphql-tag";

//  import { vueVimeoPlayer } from 'vue-vimeo-player'

export default {
  data() {
    return {
      microProject: [],
      moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id,
      playerWidth:840,
      playerHeight:540
      
    }
  },
  components: {

 
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
