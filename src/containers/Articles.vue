<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
       <FrontView />
        <ArticlesList :articles="this.categories[3].articles || []"></ArticlesList>
         <OtherArticles :articles="this.categories[4].articles || []"></OtherArticles>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList.vue";
import FrontView from "../components/FrontView";
import OtherArticles from "../components/OtherArticles.vue";
import gql from "graphql-tag";

export default {
  components: {
    ArticlesList,
    FrontView,
    OtherArticles
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
          articles{
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

    `
  
  }
  }
  ,
  methods: {
    selectedArticles() {
      let Articles = [];
      console.log('array',this.categories[3].articles)
      Articles = this.categories[3];
      return Articles;
      // if(this.articles.length!=0){
      //   let selectedProjects = [];
      //   this.articles.forEach(element => {
      //     console.log(element.category.id);
      //     if(element.category.id == 6){
      //       selectedProjects.push(element);
      //     }
      //   });
      //   return selectedProjects;
      //   }
    }
}
}

</script>