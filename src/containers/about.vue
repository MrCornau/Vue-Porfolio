<template>
  <div class="About" v-if="this.aboutMePage.ProfessionalExperience">


<Head :content="this.aboutMePage"></Head>
<div>
  <div class="article-detail__width center article-detail__container">
  <HowIWork :content="this.aboutMePage.AboutMeText"  :title="'About Me'" class="margin-bottom--XS"/>
</div>
  <div class="article-detail__width center article-detail__container">
  <ImageSlider v-if="this.aboutMePage.AboutMeGalery"  :images="this.aboutMePage.AboutMeGalery" class="margin-bottom--XL"></imageSlider>
</div>
<div class="article-detail__width center article-detail__container">
  <HowIWork :content="this.aboutMePage.HowIWork" :image="this.aboutMePage.HowIWorkImage.url" :title="'How I Work'" class="margin-bottom--XL"/>
 
</div>
<div class="article-detail__width center article-detail__container">
 <Timeline  v-if="this.aboutMePage.ProfessionalExperience" :content="this.aboutMePage.ProfessionalExperience || []" :title="'Experience'"/>
 </div>
 
<div class="article-detail__width center article-detail__container">
   <Timeline v-if="this.aboutMePage.Education.items" :content="this.aboutMePage.Education" :title="'Education'"/>
 </div>

<div class="article-detail__width center article-detail__container">
   <Awards v-if="this.aboutMePage.Awards" :test="this.aboutMePage.Awards" :title="'Awards'" :batches="this.aboutMePage.AwardsBatches" />
 </div>



<div class="article-detail__width center article-detail__container">
  <Contact :content="this.aboutMePage.Contact.Contact" ></Contact>
</div>

</div>



  </div>
</template>

<script>
import gql from "graphql-tag";
import Head from "./AboutMe/Head.vue";
import HowIWork from "./AboutMe/HowIWork.vue";
import Timeline from "./AboutMe/Timeline.vue";
import Awards from "./AboutMe/Awards.vue";
import ImageSlider from "./AboutMe/ImageSlider.vue"
import Contact from "./AboutMe/Contact.vue"

export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      aboutMePage: {},
      Head
    };
  },
  components: {
    Head,
    HowIWork,
    Timeline,
    Awards,
    ImageSlider,
    Contact
  },

  apollo: {
    aboutMePage: gql`
      query aboutMePage {
        aboutMePage {
        aboutMeIntro
          AboutMeImage
          {url}
          HowIWork
          HowIWorkImage{url}
          ProfessionalExperience
          Education
          Awards
          AwardsBatches{url}
          AboutMeText
          AboutMeGalery{url}
          Contact
        }
      }
    `,
  }
};
</script>

<style scoped>

</style>



