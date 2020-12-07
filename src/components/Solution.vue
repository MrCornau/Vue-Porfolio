<template>
  <div class="article-detail__domains">
    <h2>The Solution</h2>
    <div class="Article-detail__description">
      <div class="Article-detail__description--text">{{ solution.Problem_text }}</div>
      <div class="Article-detail__description__inlineImages">
       
          <img
            class="Article-detail__description__inlineImages--size"
            v-if="images"
            :src="api_url + images.url"
            alt="nothing"
          />
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
    };
  },
  props: {
    solution: Object,
  },
};
</script>
