<template>
  <div  class="articles">
    <div>
        <div class="articles__container global--width">
          <div class="articles__container__info" >
            <h4 v-scrollanimation v-bind:style="{'transition-delay': '0s'}"  class="articles__container--marginSM articles__container__info__time">{{ article.publishedAt }}</h4>
            <h2 v-scrollanimation v-bind:style="{'transition-delay': '0.2s'}" class="articles__container--marginSM articles__container__info--order">{{ article.title }}</h2>
            <p v-scrollanimation v-bind:style="{'transition-delay': '0.3s'}" class="articles__container--marginL articles__container__info--order articles__container__info__description">{{ article.description }}</p>
            <ArticlesTag
              class="articles__container--marginL articles__container__tag"
              v-bind:tags="article.Tags.tags"
            />
            <Button v-bind:path="'/impressions/' + article.id" v-bind:name="'more info'" class="articles__container__info--order"/>
          </div>
          <div
            class="articles__container__distance"
          
          ></div>
          <router-link v-scrollanimation :to="{ path: '/impressions/' + article.id }" class="blog__container__image" >
        
             
            <img
              class="blog-image--size"
              :src="api_url + article.image.url"
              alt="nothing"
            />
             </router-link>
  
        </div>
     
    </div>
  </div>
</template>

<script>
import ArticlesTag from "../../components/ArticlesTag";
import Button from"../../components/Button.vue";

export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      header: [],
    };
  },
  props: {
    article: Array,
  },
  components: {
    ArticlesTag,
    Button
  },
  created: function() {
    // `this` points to the vm instance
   // console.log("a is: " + this.articles);
  },
};
</script>

<style scoped>

.before-enter{
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.3s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}


.blog__container__image{
    order: 2;
    background-color: #f5f5f5;
    overflow: hidden;
    position: relative;
}
.blog-image--size{
    position: absolute;
    top: 0;
    height: 100%;
    transform: translate(-50%, 0);
    left: 50%;
}

@media only screen and (max-width: 600px) {
    .articles{
        padding-top: 80px;
    }
     .blog__container__image{
            padding-top: 56.25%;
         
}
}
@media only screen and (min-width: 600px) and (max-width: 1200px) and (orientation: portrait) {
 
       .blog__container__image{
           margin-top: 90px;
         width: 100%;
         padding-top: 56.25%;
}
}
@media only screen and (min-width: 600px) and (max-width: 900px) and (orientation: landscape) {
    
}
@media only screen and (min-width: 900px) and (max-width: 1200px) and (orientation: landscape) {
        .articles{
        padding-top: 80px;
    }
     .blog__container__image{
         width: 70%;
         padding-top: 36.25%;
      
}
}
@media only screen and (min-width: 1200px)and (max-width: 1900px) {
    .articles{
        padding-top: 100px;
    }
      .blog__container__image{
         width: 60%;
         padding-top: 34.25%;
        
}
}
@media only screen and (min-width: 1900px) {
    .articles{
        padding-top: 100px;
    }
    .blog__container__image{
    width: 60%;
    padding-top:  34.25%;
      
}
}
</style>