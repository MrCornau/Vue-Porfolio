<template>
  <div v-if="this.categories[4].articles" class="projectslider">
      <div class="projectslider__container">

    <div
      class="projectslider__image"
      v-for="article in CombinedArray"
      :key="article.id"
    >
    <div class="projectslider__project">

      <router-link
        :to="{ path: '/article/' + article.id }"
        class="other-articles__container__image articles__container--marginL"
      >
        <img
          class="other-articles__container__image--size "
          :src="api_url + article.image[0].url"
          alt="nothing"
        />
      </router-link>
    </div>
    </div>
    <div class="end"></div>
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
      categories: [],
    };
  },

  components: {},
  computed: {
    CombinedArray: function() {
    function shuffle(array) {
            return array.sort(() => Math.random() - 0.5);
    }
      let Array1 = [...this.categories[3].articles];
      let Array2 = [...this.categories[4].articles];
      let NewArray = shuffle(Array1.concat(Array2));
      return NewArray;
    },
  },

  apollo: {
    categories: {
      query: gql`
        query Categories {
          categories {
            id
            articles {
              id
              Position
              title
              Year
              Tags
              Description
              image {
                url
              }
            }
          }
        }
      `,
    },
  },
};
</script>

<style scoped>
.projectslider{
    align-items: center;
   height: 100vh;
    }
.projectslider__container{
    padding-left:15%;
    display: flex;
   overflow-x: auto;

     --gap: 30px;
  --column-gap: var(--gap);
  --row-gap: var(--gap);
  margin: calc(var(--row-gap) / -2) calc(var(--column-gap) / -2);
}



.projectslider__container  > * {
  margin: calc(var(--row-gap) / 2) calc(var(--column-gap) / 2);
}
.projectslider__project{
  width: 300px;
  flex-shrink: 0;
  height: 80%;
}
.end{
    min-width: 200px;
    min-height: 100%;
}


</style>