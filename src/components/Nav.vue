<template>
  <nav>
    <ul class="menu">
      <li><a class="logo" href="/">Josh Cornau</a></li>
      <li class="push"></li>
      
      <li  class="item"
       v-for="category in categories" v-bind:key="category.id">
        <router-link
         
          :to="{ path: '/category/' + category.id }"
          :key="category.id"
        >
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Nav",
  data() {
    return {
      categories: [],
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
    `,
  },
};
</script>

<style lang="css">
.uk-navbar-nav {
  font-family: Staatliches;
}
</style>
