<template>
 <div class="other-articles__box" >
      <div class="articles__container__info articles__container__distance--order " >
            
            <h4 class="articles__container--marginSM articles__container__info__time">{{ article.Year }}</h4>
            <h2 class="articles__container--marginSM articles__container__info--order black">{{ article.title }}</h2>
            <ArticlesTag
              class="articles__container__tag"
              v-bind:tags="article.Tags.tags.slice(0, 2)"
            />
            <p class="articles__container--marginL articles__container__info--order articles__container__info__description black">{{ article.Description }}</p>
            
          </div>
          <router-link :to="{ path: '/article/' + article.id }" class="other-articles__container__image articles__container--marginL" >
        
             
            <img
              class="other-articles__container__image--size "
              :src="api_url + article.image[0].url"
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
