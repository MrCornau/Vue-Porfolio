<template>
  <div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  components: {
    VueMarkdownIt
  },
  apollo: {
    article: {
      query: gql`
        query Articles($id: ID!) {
          article(id: $id) {
            id
            title
            content
            image {
              url
            }
            published_at
          }
        }
      `,
      variables() {
        return {
          id: this.routeParam
        };
      }
    }
  }
};
</script>