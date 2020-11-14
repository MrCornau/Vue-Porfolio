<template>
 <div class="start-view">
      <div class="start-view__container global--width">
        <h1 class="start-view__left" v-html="header.text" />
        <div class="start-view__right">
          <img
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



