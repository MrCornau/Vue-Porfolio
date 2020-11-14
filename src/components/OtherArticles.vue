<template>
  <div class="articles">
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
            <h4 class="articles__container--marginSM">{{ article.Year }}</h4>
            <h2 class="articles__container--marginSM">{{ article.title }}</h2>
            <p class="articles__container--marginL">{{ article.Description }}</p>
            <ArticlesTag
              class="articles__container--marginL"
              v-bind:tags="article.Tags.tags"
            />
            <router-link :to="{ path: '/article/' + article.id }" class="">
              <button class="article-preview__button ">
                more info
              </button></router-link
            >
          </div>
          <div
            class="articles__container__distance"
            v-bind:class="{ 'articles__container__distance--order': index % 2 == 1 }"
          ></div>
          <div class="articles__container__image">
            <img
              class="articles__container__image--size"
              :src="api_url + article.image[0].url"
              alt="nothing"
            />
          </div>
        </div>
      </div>
    </div>
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
    articles: Array,
  },
  components: {
    ArticlesTag,
  },
  computed: {},
  created: function() {
    // `this` points to the vm instanc
  },
};
</script>
