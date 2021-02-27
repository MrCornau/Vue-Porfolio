<template>
  <div class="footer">
   <ul class="Footer--List">
       <li><a>Imprint</a></li>
       <li><a>contact</a></li>
       <li><a>made with ❤️ by Josh Cornau</a></li>
   </ul>
  </div>
 
</template>

<script>
import gql from "graphql-tag";

export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
    };
  },
  components: {},

  apollo: {
    footer: gql`
      query footer {
        footer {
          AAContacts
          Imprint
        }
      }
    `,
  },
};
</script>

<style scoped>


.footer{
    margin: auto;
    width: 90%;
    background-color: blue;
}

.Footer--List{
    list-style: none;
}

</style>
