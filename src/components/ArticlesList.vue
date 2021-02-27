<template>
  <div  class="articles">
    <div>
      <div class="articles__heading global--width">
        <h1>Selected Projects</h1>
      </div>
      <div 
        v-for="(article, index) in articles"
        :key="article.id"
      >
        <div class="articles__container global--width">
          <div class="articles__container__info" v-bind:class="{ 'articles__container__info--order': index % 2 == 1 }">
            <h4 v-scrollanimation class="articles__container--marginSM articles__container__info__time">{{ article.Year }}</h4>
            <h2  v-scrollanimation class="articles__container--marginSM articles__container__info--order">{{ article.title }}</h2>
            <p  v-scrollanimation class="articles__container--marginL articles__container__info--order articles__container__info__description">{{ article.Description }}</p>
            <ArticlesTag
              class="articles__container--marginL articles__container__tag"
              v-bind:tags="article.Tags.tags"
            />
            <Button v-bind:path="routePath + article.id" v-bind:name="'more info'" class="articles__container__info--order"/>
          </div>
          <div
            class="articles__container__distance"
            v-bind:class="{ 'articles__container__distance--order': index % 2 == 1 }"
          ></div>
          <router-link :to="{ path: routePath + article.id }" class="articles__container__image" v-scrollanimation>
        
           
            <img
              class="articles__container__image--size"
              :src="api_url + article.image[0].url"
              alt="nothing"
            />
             </router-link>
  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlesTag from "../components/ArticlesTag.vue";
import Button from"../components/Button.vue";

export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      header: [],
    };
  },
  props: {
    articles: Array,
    routePath:String
  },
  components: {
    ArticlesTag,
    Button
  },
  computed: {},
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
  transition: all 0.9s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
