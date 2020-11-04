<template>
 <div class="header">
      <div class="header-container">
        <VueMarkdownIt 
        class="header-left"
          v-if="header.text"
          :source="header.text"
          id="editor"
/>
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
import VueMarkdownIt from "vue-markdown-it";

export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      header: [],
    };
  },
  components: {
    VueMarkdownIt
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



