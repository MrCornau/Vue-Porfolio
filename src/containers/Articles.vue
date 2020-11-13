<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
       <FrontView />
        <ArticlesList :articles="this.categories[3].articles || []"></ArticlesList>
         <ArticlesList :articles="this.categories[4].articles || []"></ArticlesList>
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
              content
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