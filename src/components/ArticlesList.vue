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
      <div class="heading">
        <h1>Selected Projects </h1>
      </div>
        <div class="articles">
          <router-link
            v-for="article in articles"
            :to="{ path: '/article/' + article.id }"
            class=""
            :key="article.id"
          >
            <div class="articles-left">
              <div class="info red">
                <p>2019/2020</p>
                <h2> {{ article.title }}</h2>
                <p> {{article.Description}}</p>
                <div class="tag-container red">
                  <div class="tag" v-for="tag in article.Tags.tags" :key="tag.id">
                    <i class="fas fa-clock" style="font-size:24px;"></i>
                    <p>{{tag.content}}</p>
                  </div>
              </div>
              </div>

              <div class="image-box red ">
                <img
                class="Article-Image"
                  :src="api_url + article.image[0].url"
                  alt="nothing"
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

</template>

<script>

export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      header: [],
    };
  }
  ,
  props: {
    articles: Array
  },
  computed: {
  },
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.articles)
  }
};
</script>


