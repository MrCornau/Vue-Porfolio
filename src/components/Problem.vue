<template>
  <div class="article-detail__domains">
    <h2>The Problem</h2>
    <div class="problem__description">
      <div class="problem__description--text">{{ problem.Problem_text }}</div>
      <div class="problem__description__images" >
           <div
        class="problem__description__images__imagebox"
        v-for="images in problem.Problem_illustration"
        v-bind:key="images.id"
      >
    
        <img  class="problem__description__images__image" v-if="images" :src="api_url + images.url" alt="nothing" />
    
 
  
      
      </div>
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
    problem: Array,
  },
};
</script>
