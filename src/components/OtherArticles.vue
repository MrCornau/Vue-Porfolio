<template>
  <div class="articles">
    <div>
      <div class="articles__heading global--width">
        <h1>Archiv</h1>
      </div>
      <div class="global--width other-articles__container">
    <div
        class=""
        v-for="(article) in articles"
        :key="article.id"
      >
      <small-article class="" :article="article" :routePath="routePath"></small-article>
      </div>


      </div>
      
    </div>
  </div>
</template>

<script>
import SmallArticle from "../components/SmallArticle";

export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      header: [],
    };
  },
  props: {
    articles: Array,
    routePath: String
  },
  components: {
    SmallArticle,
  },
  computed: {},
  created: function() {
    // `this` points to the vm instance
   // console.log("a is: " + this.articles);
  },
};
</script>


