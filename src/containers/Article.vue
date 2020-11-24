<template>
  <div>
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

    <div v-if="article.content" class="article-detail__info">
      <h3>{{article.content}}</h3>
    </div>
    <div class="article-detail__domains">
      <h2>Domains</h2>
      <div class="article-detail_domains__Tags" >
        <div v-for="tag in slicedArray" v-bind:key="tag.id">
          <div class="article-detail_domains__Tags__Tag" v-bind:style="{ 'background-color': article.color}" >
              <box-icon v-bind:name="tag.icon" size="lg" animation='tada-hover' color="#253031"></box-icon>
               <p>{{ tag.content }}</p>
            </div>
        </div>
      </div>
    </div>

    </div>
  </div>
</template>

<script>
var moment = require("moment");
import gql from "graphql-tag";

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
  },
  computed: {
      slicedArray: function () {
    return this.article.Tags.tags.slice(1,5);
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
