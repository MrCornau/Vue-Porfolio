<template>
  <div >
     <vue-markdown-it class="MarkdownWrapper-Content margin-bottom--M margin-top--XL"
          :content="footer.Imprint"
        />
  </div>
</template>

<script>
import VueMarkdownIt from "markdown-it-vue";
import gql from "graphql-tag";

export default {
  data() {
    return {
    }
  },
  props : {
      content:String
  },
  components: {
VueMarkdownIt
  // MoreInformation,
  },

    apollo: {
    footer: gql`
      query footer {
        footer {
          Imprint
        }
      }
    `,
  },



};
</script>

<style scoped>

.MarkdownWrapper-Content{
    margin-left: auto;
     margin-right: auto;
    width: 70%;
}


</style>
