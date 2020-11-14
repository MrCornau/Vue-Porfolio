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
import StartView from "../components/StartView";
import ArticlesList from "../components/ArticlesList.vue";
import OtherArticles from "../components/OtherArticles.vue";
import gql from "graphql-tag";

export default {
  components: {
   
    StartView,
    ArticlesList,
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
