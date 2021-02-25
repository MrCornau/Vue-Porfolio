<template>
 <div  class="About--start-view" >
      <div class="About--start-view__container global--width">
      
        <div class="About--start-view__right">
          <img 
            v-if="content.AboutMeImage"
            class="About--start-view__right__image"
            :src="api_url + content.AboutMeImage.url"
            alt=""
          />
        </div>
          <span class="About--start-view__left white" v-html="content.aboutMeIntro" />
      </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
    };
  },
  props: {
     content: {
      type: Object,
    }
  },
};
</script>

<style scoped>



.About--start-view {
    max-width: 100%;
    height: 100vh;
  }
  
  .About--start-view__container {
    display: flex;
    flex-direction: row;
    margin: auto;
    height: 100%;
  }
  
  
  @media only screen and (max-width: 1200px) {
    .About--start-view__left {
      flex: 60%;
      max-width: auto;
      height: auto;
      align-self: center;
    }
  
    .About--start-view__right {
      display: none;
    }
  }
  
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .About--start-view__left {
      flex: 40%;
      max-width: auto;
      height: auto;
      align-self: center;
    }
  
    .About--start-view__right {
      flex: 50%;
      max-width: auto;
      height: auto;
      align-self: flex-end;
    }
  }
  
  
  .About--start-view__right__image {
    width: 100%;
    margin-top: auto;
  }
  
</style>