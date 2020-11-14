<template>
  <div>
    <StartView />
    <ArticlesList :articles="this.categories[3].articles || []"></ArticlesList>
    <OtherArticles
      :articles="this.categories[4].articles || []"
    ></OtherArticles>
  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList.vue";
import StartView from "../components/StartView";
import OtherArticles from "../components/OtherArticles.vue";
import gql from "graphql-tag";

export default {
  components: {
    ArticlesList,
    StartView,
    OtherArticles,
  },
  data() {
    return {
      categories: [],
    };
  },
  apollo: {
    categories: {
      query: gql`
        query Categories {
          categories {
            id
            articles {
              id
              title
              Year
              Tags
              Description
              image {
                url
              }
            }
          }
        }
      `,
    },
  }
};
</script>
