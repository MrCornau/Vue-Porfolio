<template>
    <div>

  <div class="article-detail__domains white">
    <h2>How I Work</h2>
    <div class="Article-detail__description">
      <p class="Article-detail__description--text">{{ content.HowIWork }}</p>
    </div>
  </div>

   <div class="Article-detail__description__Image">
       
          <img
            class="Article-detail__description__inlineImages--size"
            v-if="content.HowIWorkImage"
            :src="api_url + content.HowIWorkImage.url"
            alt="nothing"
          />
      
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
     content: {
      type: Object,
    }
  },
};
</script>
