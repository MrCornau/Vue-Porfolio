<template>
  <div v-if="article.Detail">
    <div v-if="!article.Videolink" class="article-detail__header-image">
      <img
        v-if="article.Header_Image"
        class=""
        :src="api_url + article.Header_Image.url"
        alt="nothing"
      />
    </div> 
    <div v-if="article.Videolink" class="article-detail__header-video" v-bind:style="{ 'background-color': white}">
    <div class="Video-Player--Container">
      <iframe :src="article.Videolink" class="Video-Player" :width="playerWidth" :height="playerHeight" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>

    <div class="article-detail__container article-detail__width">
      <div class="article-detail__heading">
        <h1>{{ article.title }}</h1>
        <h1>{{ article.Header_Explanation }}</h1>
      </div>

    <div  class="article-detail__info">
      <p>{{article.content}}</p>
    </div>
    <Domains   :Domains="slicedArray" :articleColor="article.color"/>
    <Outlines :ProjectInfo="article.Detail[1].project_info" :ProjectRole="article.Detail[1].project_role" :articleColor="article.color" />
    </div>
    <HowMightWe v-if="HMW" :HowMightWe="HMW"  :articleColor="article.color" />

  <div class="article-detail__container article-detail__width">
    <Problem v-if="problem" :problem="problem" />
    <Solution v-if="solution" :solution="solution" />
  </div>
    <Presentator v-if="article.Presentation" :Content="article.Presentation"/>
    <MoreInformation :Content="article.More_Infos" :articleColor="article.color" class="margin-bottom--XL"/>
    <MoreProjects :title="article.title" ></MoreProjects>
  </div>



</template>

<script>
var moment = require("moment");
import gql from "graphql-tag";
import Domains from "../components/Domains";
import Outlines from "../components/Outlines";
import HowMightWe from "../components/HowMightWe";
import Problem from "../components/Problem";
import Solution from "../components/Solution"
import Presentator from "../components/Presentator"
import MoreProjects from "../components/MoreProjects"
import MoreInformation from "../containers/ArticleDetail/MoreInformation"
//  import { vueVimeoPlayer } from 'vue-vimeo-player'

export default {
  data() {
    return {
      article: {},
      moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id,
      playerWidth:840,
      playerHeight:540
      
    }
  },
  components: {
    Domains,
    Outlines,
    HowMightWe,
    Problem,
    Solution,
    Presentator,
    MoreProjects,
    MoreInformation,
    // vueVimeoPlayer
 
  },

  methods: {
    handleView() {
      this.playerWidth = window.innerWidth*0.95;
      this.playerHeight = window.innerWidth*0.53125*0.95;
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },

  computed: {
      slicedArray: function () {
      return this.article.Tags? this.article.Tags.tags.slice(1,5) : [];
    },
      HMW: function(){
        return this.article.Detail.find(element => element.name === 'hmw');
      },
      projectDetail: function(){
        return this.article.Detail.find(element => element.name === 'projectDetail');
      },
      problem: function(){
        return this.article.Detail.find(element => element.name === 'problem');
      },
      solution: function(){
        return this.article.Detail.find(element => element.name === 'solution');
      },
      
  },

  apollo: {
    article: {
      query: gql`
        query Articles($id: ID!) {
          article(id: $id) {
            id
            title
            Videolink
            Year
            content
            Tags
            color
            Description
            Header_Image {
              url
            }
            Header_Explanation
            image {
              url
            }

            More_Infos{
             Supervisors
             TeamMates
          	 Dokumentation
          			{url}
            }

            Presentation{
                ...on ComponentProjectsProjectPresentation{
                  Description_Presentation
                  scroll
                  Content
                  content_video{url}
                  Kind
                }}
            Detail {
              ... on ComponentProjectsGraphic {
                id
                name
                Solution_Text
                Solution_graphic {
                  url
                }
              }
              ... on ComponentProjectsHmw {
                id
                HowMightWe
                name
              }
              ... on ComponentProjectsOutline {
                id
                project_info
                project_role
              }
              ... on ComponentProjectsTheProblem {
                id
                name
                Problem_text
                Problem_illustration {
                  url
                }
              }
            }
          }
        }
      `,
      variables() {
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
