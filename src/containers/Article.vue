<template>
  <div>
    <div
      v-if="article.image"
      class=""
      :data-src="api_url + article.image[0].url"
    >
      <h1>{{ article.title }}</h1>
      <h1>{{ article.title }}</h1>
      <h1>{{ article.title }}</h1>
      <h1>{{ article.title }}</h1>
      <h1>{{ article.title }}</h1>
    </div>

    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <vue-markdown-it
          v-if="article.content"
          :source="article.content"
          id="editor"
        />
        <p v-if="article.published_at">
          {{ moment(article.published_at).format("MMM Do YY") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
var moment = require("moment");
import VueMarkdownIt from "vue-markdown-it";
import gql from "graphql-tag";




export default {
  data() {
    return {
      article: {},
      moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id
    };
  },
  components: {
    VueMarkdownIt
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
              Description
              image {
                url
              }
              Detail{
                ... on ComponentProjectsGraphic{
                  id
                  Solution_Text
                  Solution_graphic {url}
                  
                }
                ... on ComponentProjectsHmw{
                  id
                  HowMightWe
                }
                ... on ComponentProjectsOutline{
                  id
                  project_info
                  project_role
                }
                 ... on ComponentProjectsTheProblem{
                  id
                  Problem_text
                  Problem_illustration{url}
                }
              }
              
          }
        }
      `,
      variables() {
        return {
          id: this.routeParam
        };
      }
    }
  }
};
</script>