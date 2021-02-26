<template>
  <div v-if="this.microProjects[0]" >
    <BlogList :article=" this.Selected[0] || []" :routePath="'/impressions/'" ></BlogList>
       <OtherBlogArticles
      :articles="this.NotSelected || []" :routePath="'/impressions/'"
    ></OtherBlogArticles>

</div>
   
 
</template>

<script>

import BlogList from "./ArticleDetail/BlogList";
import OtherBlogArticles from "../components/OtherBlogArticles.vue";
import gql from "graphql-tag";

export default {
  
  components: {
   

    BlogList,
    OtherBlogArticles,
  },
  data() {
    return {
      microProjects: [],
      ArrayToSort:[],
      
    };
   
  },methods: {
    console(foo) {
      console.log(foo);
    },
    find(arr,value) { 
        return arr.filter(function(ele){ 
            return ele.isSelected != value; 
        });
    }
  },
  computed: {
    Selected: function() {

      let Array1 = [...this.microProjects];
      let NewArray = this.find(Array1, null);
    
      // let NewArray = shuffle(Array1).concat(shuffle(Array2));
      // //this.console('New:'+NewArray);
      //let FinalArray = this.arrayRemove(NewArray, this.title)
      //this.console('Final:'+this.title);
      this.console(NewArray);
      return NewArray;
      
    },
      NotSelected: function() {

      let Array1 = [...this.microProjects];
      let NotSelected = this.find(Array1, true);
      // let NewArray = shuffle(Array1).concat(shuffle(Array2));
      // //this.console('New:'+NewArray);
      //let FinalArray = this.arrayRemove(NewArray, this.title)
      //this.console('Final:'+this.title);
      //this.console(NewArray);
      return NotSelected.reverse();
      
    }
  },
  apollo: {
    microProjects: {
      query: gql`
         query MicroProjects {
          microProjects {
            isSelected
            title
            content
            image{url}
            publishedAt
            description
            Tags
            publishedAt
            id
            
          }
        }
      `,
    },
  }
};
</script>
