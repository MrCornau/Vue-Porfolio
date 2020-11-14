<template>
  <div>
    <div>
      <div class="heading">
        <h1>Selected Projects</h1>
      </div>
      <div class="articles">
        <router-link
          v-for="(article, index) in articles"
          :to="{ path: '/article/' + article.id }"
          class=""
          :key="article.id"
        >
          <div class="articles-main">
            <div class="info " v-bind:class="{ 'order-info': index % 2 == 1 }">
              <h4 class="articles-preview-margins">{{ article.Year }}</h4>
              <h2 class="articles-preview-margins">{{ article.title }}</h2>
              <p class="articles-preview-marginl">{{ article.Description }}</p>
              <Tags v-bind:tags="article.Tags.tags" />
            </div>
            <div
              class="distance-articles"
              v-bind:class="{ 'order-margin': index % 2 == 1 }"
            ></div>
            <div class="image-box">
              <img
                class="Article-Image"
                :src="api_url + article.image[0].url"
                alt="nothing"
              />
            </div>

            <!--               
              <div class="tags red">
                <p id="category" v-if="article.category" class="">
                  {{ article.category.name }}
                </p>
              </div> -->
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Tags from "../components/TagPreview.vue";

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
    Tags,
  },
  computed: {},
  created: function() {
    // `this` points to the vm instance
    console.log("a is: " + this.articles);
  },
};
</script>
