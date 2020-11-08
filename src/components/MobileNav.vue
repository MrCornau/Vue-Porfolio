/* eslint-disable */
<template>
  <nav class="sticky ">
    <div>
      <div class="mobileNav">
        <div id="Mobile-Logo">
          <router-link :to="{ path: '/' }">
            Josh Cornau
          </router-link>
        </div>
        <div id="navigation-icon" @click="showNav = !showNav">
          <i class="fas fa-bars" />
        </div>
      </div>
    </div>
    <div class="" v-if="showNav">
      <ul class="menue-mobile">
        <li class="item-mobile">
          <router-link :to="{ path: '/' }"> Work {{ mobileView }} </router-link>
        </li>
        <li
          class="item-mobile"
          v-for="category in categories"
          v-bind:key="category.id"
        >
          <router-link
            :to="{ path: '/category/' + category.id }"
            :key="category.id"
          >
            {{ category.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Nav",
  data() {
    return {
      categories: [],
      showNav:false
    };
  },
  // props: {
  //   mobileView: {
  //     type: Boolean,
  //   },
  // },
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
