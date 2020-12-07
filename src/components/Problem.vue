<template>
  <div class="article-detail__domains">
    <h2>The Problem</h2>
    <div class="Article-detail__description">
      <div class="Article-detail__description--text">{{ problem.Problem_text }}</div>
      <div class="Article-detail__description__inlineImages">
        <div
          class="Article-detail__description__inlineImages__box"
          v-for="images in ProblemImage"
          v-bind:key="images.id"
        >
          <img
            class="Article-detail__description__inlineImages--size"
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
