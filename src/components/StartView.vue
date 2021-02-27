<template>
 <div class="start-view" >
      <div class="start-view__container global--width">
        <span class="start-view__left" v-scrollanimation v-html="header.text" />
        <div class="start-view__right">
          <img 
            v-if="header.image"
            class="start-view__right__image"
            :src="api_url + header.image.url"
            alt=""
          />
        </div>
      </div>
    </div>
</template>
<script>
import gql from "graphql-tag";
export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      header: [],
    };
  },
  components: {
  },
  apollo: {
    header: gql`
      query header {
        header {
          text,
          image{url}
        }
      }
    `,
  }
};
</script>

<style scoped>
.before-enter{
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease-in-out;
}

.enter {
   opacity: 1;
  transform: translateY(0px);

}
</style>