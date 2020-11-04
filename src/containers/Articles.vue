<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
       <FrontView />
        <ArticlesList :articles="articles"></ArticlesList>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList.vue";
import FrontView from "../components/FrontView";
import gql from "graphql-tag";

export default {
  components: {
    ArticlesList,
    FrontView
  },
  data() {
    return {
      articles: []
    };
  },
  apollo: {
    articles: gql`
      query Articles {
        articles {
          id
          title
          content
          image {
            url
          }
          category {
            name
          }
        }
      }
    `
  }
};
</script>