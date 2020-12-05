<template>
  <div v-if="article">
    <div class="article-detail__header-image">
      <img
        v-if="article.Header_Image"
        class=""
        :src="api_url + article.Header_Image.url"
        alt="nothing"
      />
    </div>

    <div class="article-detail__container article-detail__width">
      <div class="article-detail__heading">
        <h1>{{ article.title }}</h1>
        <h1>{{ article.Header_Explanation }}</h1>
      </div>

    <div  class="article-detail__info">
      <p>{{article.content}}</p>
    </div>
    <Domains  :Domains="slicedArray" :articleColor="article.color"/>
    <Outlines :ProjectInfo="article.Detail[1].project_info" :ProjectRole="article.Detail[1].project_role" :articleColor="article.color" />
    </div>
  </div>
</template>

<script>
var moment = require("moment");
import gql from "graphql-tag";
import Domains from "../components/Domains";
import Outlines from "../components/Outlines";


export default {
  data() {
    return {
      article: {},
      moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id,
      
    }
  },
  components: {
    Domains,
    Outlines
  },
  computed: {
      slicedArray: function () {
    return this.article.Tags.tags.length>1 ? this.article.Tags.tags.slice(1,5) : [];
    }
  },

  apollo: {
    article: {
      query: gql`
        query Articles($id: ID!) {
          article(id: $id) {
            id
            title
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
            Detail {
              ... on ComponentProjectsGraphic {
                id
                Solution_Text
                Solution_graphic {
                  url
                }
              }
              ... on ComponentProjectsHmw {
                id
                HowMightWe
              }
              ... on ComponentProjectsOutline {
                id
                project_info
                project_role
              }
              ... on ComponentProjectsTheProblem {
                id
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
  },
};
</script>
