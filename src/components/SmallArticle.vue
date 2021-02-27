<template>
 <div class="other-articles__box" >
      <div class="articles__container__info articles__container__distance--order " >
            
            <h4 v-scrollanimation v-if="article.Year" v-bind:style="{'transition-delay': '0s'}"  class="articles__container--marginSM articles__container__info__time">{{ article.Year }}</h4>
            <h4 v-scrollanimation v-if="article.publishedAt" v-bind:style="{'transition-delay': '0.1s'}" class="articles__container--marginSM articles__container__info__time">{{ article.publishedAt }}</h4>
            <h2 v-scrollanimation v-bind:style="{'transition-delay': '0.2s'}" class="articles__container--marginSM articles__container__info--order black">{{ article.title }}</h2>
            <ArticlesTag
              class="articles__container__tag"
              v-bind:tags="article.Tags.tags.slice(0, 2)"
            />
            <p v-scrollanimation v-if="article.Description"  v-bind:style="{'transition-delay': '0.3s'}" class="articles__container--marginL articles__container__info--order articles__container__info__description black">{{ article.Description }}</p>
            <p v-scrollanimation v-if="article.description" v-bind:style="{'transition-delay': '0.3s'}" class="articles__container--marginL articles__container__info--order articles__container__info__description black">{{ article.description }}</p>
          </div>
          <router-link v-scrollanimation :to="{ path: routePath + article.id }" class="other-articles__container__image articles__container--marginL" v-bind:style="{'transition-delay': '0s'}" >
        
             
            <img
              v-if="!article.image.url"
              class="other-articles__container__image--size "
              :src="api_url + article.image[0].url"
              alt="nothing"
            />
            <img
              v-if="article.image.url"
              class="other-articles__container__image--size "
              :src="api_url + article.image.url"
              alt="nothing"
            />
             </router-link>
  </div>
</template>

<script>
import ArticlesTag from "../components/ArticlesTag.vue";

export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      header: [],
    };
  },
  props: {
    article: Object,
     routePath: String
  },
  components: {
    ArticlesTag,
  },
  computed: {},
  created: function() {
    // `this` points to the vm instance
    //console.log("a is: " + this.articles);
  },
};
</script>

<style scoped>
.before-enter{
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.7s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>