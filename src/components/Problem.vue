<template>
  <div class="article-detail__domains">
    <h2>The Problem</h2>
    <div class="Article-detail__description">
      <p v-scrollanimation v-bind:style="{'transition-delay': '0s'}" class="Article-detail__description--text">{{ problem.Problem_text }}</p>
      <div class="Article-detail__description__inlineImages ">
        <div
          class="Article-detail__description__inlineImages__box"
          v-for="(images, index) in ProblemImage"
          v-bind:key="images.id"
           v-scrollanimation v-bind:style="{'transition-delay': 0.1*index+'s'}" 
        >
          <img
         
            class="Article-detail__description__inlineImages--size margin-top--M"
            v-if="images"
            :src="api_url + images.url"
            alt="nothing"
          />
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
      mobileView: true,
      ProblemImage:[]
    };
  },
  computed:{

  },
  props: {
    problem: Object,
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 740;
      this.mobileView ? this.ProblemImage = this.problem.Problem_illustration.slice(0,2): this.ProblemImage = this.problem.Problem_illustration;
  }},
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<style scoped>

.before-enter{
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.7s ease-in-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>