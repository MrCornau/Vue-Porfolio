<template>
    <div>

  <div class="article-detail__domains">
    <h2>The Solution</h2>
    <div class="Article-detail__description">
      <p class="Article-detail__description--text">{{ solution.Solution_Text }}</p>
    </div>
  </div>

   <div class="Article-detail__description__Image">
       
          <img
            class="Article-detail__description__inlineImages--size"
            
            :src="api_url + solution.Solution_graphic[0].url"
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
    solution: Object,
  },
};
</script>
