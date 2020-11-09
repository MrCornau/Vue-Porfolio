/* eslint-disable */
<template>
  <nav class="sticky white-background shadow">
    <ul class="menu">
      <li class="logo">
        <router-link :to="{ path: '/' }">
          Josh Cornau
        </router-link>
      </li>
      <li class="push"></li>
      <li class="item">
        <router-link :to="{ path: '/' }" class="blueline" v-bind:class="{ 'blueline-selected' : '/' == route}">
          Work
        </router-link>
      </li>
      <li class="item" v-for="category in categories" v-bind:key="category.id">
        <router-link
          :to="{ path: '/category/' + category.id }"
          :key="category.id"
           class="blueline"
             v-bind:class="{ 'blueline-selected' : '/category/' + category.id == route}"
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
  props: {
     route: {
      type: String,
    },
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

<style lang="css"></style>
