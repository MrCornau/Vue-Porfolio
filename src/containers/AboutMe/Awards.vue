<template>
  <div  class="article-detail__domains white Timeline">
       {{content}}
    <h2>{{title}}</h2>
    <div class="Article-detail__description">
       
      <div
        class="Article-detail__description Timeline--Container"
        v-for="information in test.Award"
        :key="information.id"
      >
        <div class="Timeline--Items">
          <div >{{ information.time }}</div>
          <div>
            <h5 class="primary-dark">{{ information.Kind }}</h5>
           
          </div>
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
    test: {
      type: Object,
    },
    title:{
        type: String,
    }
  },
};
</script>
<style scoped>
.Timeline {
  width: 100%;
}
.Timeline--Container {
  width: 100%;
}

.Timeline--Items {
  margin-bottom: 2em;
  display: grid;
  grid-template-columns: 2fr 3fr;
  max-height: auto;
  grid-column-gap: 1em;
  grid-row-gap: 4em;
  width: 100%;
}
</style>
