<template>
  <div v-if="this.categories[3].articles">
    <StartView />
    <ArticlesList :articles=" sortedArray || []" :routePath="'/article/'"></ArticlesList>
    <OtherArticles
      :articles="this.categories[3].articles || []" :routePath="'/article/'"
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
      ArrayToSort:[]
    };
   
  },
  computed: {
      sortedArray: function() {
      function compare(a, b) {
        if (a.Position < b.Position)
          return -1;
        if (a.Position > b.Position)
          return 1;
        return 0;
      }
      
      let ArrayToSort = [...this.categories[2].articles];
      //console.log('lalalala'+ ArrayToSort.sort(compare))
      return ArrayToSort.sort(compare);
    }
  },

  apollo: {
    categories: {
      query: gql`
        query Categories {
          categories {
            id
            articles {
              id
              Position
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
