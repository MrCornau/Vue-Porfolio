<template>
 <div class="header">
      <div class="header-container">
        <h1 class="header-left" v-html="header.text" />
        <div class="header-right">
          <img
            class="header-image"
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



