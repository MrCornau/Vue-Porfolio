<template>
 <div class="other-articles__box" >
      <div class="articles__container__info articles__container__distance--order " >
            
            <h4 v-if="article.Year" class="articles__container--marginSM articles__container__info__time">{{ article.Year }}</h4>
            <h4 v-if="article.publishedAt" class="articles__container--marginSM articles__container__info__time">{{ article.publishedAt }}</h4>
            <h2 class="articles__container--marginSM articles__container__info--order black">{{ article.title }}</h2>
            <ArticlesTag
              class="articles__container__tag"
              v-bind:tags="article.Tags.tags.slice(0, 2)"
            />
            <p v-if="article.Description" class="articles__container--marginL articles__container__info--order articles__container__info__description black">{{ article.Description }}</p>
            <p v-if="article.description" class="articles__container--marginL articles__container__info--order articles__container__info__description black">{{ article.description }}</p>
          </div>
          <router-link :to="{ path: routePath + article.id }" class="other-articles__container__image articles__container--marginL" >
        
             
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
