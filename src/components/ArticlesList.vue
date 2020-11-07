<template>
    <div>
      <!--    -->
        <!-- <router-link
          v-for="article in article"
          :to="{ path: '/article/' + article.id }"
          class=""
          :key="article.id"
        >
          <div class="Articles-left">
          <div class="">
            <div class="">
              <img :src="api_url + article.image[0].url" alt="" height="100" />
            </div>
            <div class="">
              <p
                id="category"
                v-if="article.category"
                class=""
              >
                {{ article.category.name }}
              </p>
              <p id="title" class="">{{ article.title }}</p>
            </div>
          </div>
        </router-link> -->

      <div>
        <div class="articles">
          <router-link
            v-for="article in rightArticles"
            :to="{ path: '/article/' + article.id }"
            class=""
            :key="article.id"
          >
            <div class="articles-left">
              <div class="info red">
                <p>2019/2020</p>
                <h2>ADAC E-Mobility-Test</h2>
                <p> E-mobility raises many questions, especially for people without their own charging facilities. The digital service provides clarity and checks what the change to an e-vehicle means. </p>
                <!-- <p id="title" class="">{{ article.title }}</p> -->
                <div class="tag-container red">
                  <div class="tag">
                    <i class="fas fa-clock" style="font-size:24px;"></i>
                    <p>6-Month</p>
                    </div>
                    <div class="tag">
                    <i class="fas fa-clock" style="font-size:24px;"></i>
                    <p>6-Month</p>
                    </div>
                    <div class="tag">
                    <i class="fas fa-clock" style="font-size:24px;"></i>
                    <p>6-Month</p>
                    </div>
              </div>
              </div>

              <div class="image-box red ">
                <img
                class="Article-Image"
                  :src="api_url + article.image[0].url"
                  alt=""
                />
              </div>

<!--               
              <div class="tags red">
                <p id="category" v-if="article.category" class="">
                  {{ article.category.name }}
                </p>
              </div> -->
            </div>
          </router-link>
        </div>
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
  ,
  props: {
    articles: Array
  },
  computed: {
    leftArticlesCount() {
      return Math.ceil(this.articles.length / 5);
    },
    leftArticles() {
      return this.articles.slice(0, this.leftArticlesCount);
    },
    rightArticles() {
      return this.articles.slice(this.leftArticlesCount, this.articles.length);
    },
  },
};
</script>


