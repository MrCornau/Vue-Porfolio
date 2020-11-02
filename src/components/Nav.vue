<template>
  <div class="uk-container uk-container-xlarge">
    <nav class="uk-navbar-container uk-text-bold" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <a class="uk-text-primary" href="/">Josh Cornau</a>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav" >
          <li   v-for="category in categories" v-bind:key="category.id">
            <router-link class="uk-text-primary"
              :to="{ path: '/category/' + category.id }"
              :key="category.id"
            >
              {{ category.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Nav",
  data() {
    return {
      categories: []
    };
  },
  apollo: {
    categories: gql`
      query Categories {
        categories {
          id
          name
        }
      }
    `
  }
};
</script>

<style lang="css">
.uk-navbar-nav{
  font-family: Staatliches;
}

</style>