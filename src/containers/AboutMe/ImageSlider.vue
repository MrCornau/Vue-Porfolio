<template>
  <div  v-if="images" class="image-slider image-slider__container">
    <div v-for="(image, index) in images" :key="image.id" class="image-slider__image-container">
      <img
        @mouseover="hoveredimage = index"
        v-bind:class="{'image-hovereffect': index == hoveredimage}"
        class="image-slider__image"
        :src="api_url + image.url"
        alt="nothing"
      />
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      hoveredimage:1,
    };
  },
  methods: {
    hover(index) {
      this.hoveredimage = index;
    },
  },
  props: {
    images: {
      type: Array,
    },
  },
};
</script>
<style scoped>
.image-slider {
  width: 100%;
}
.image-slider__container{
display: grid;
  grid-template-columns: 3fr 3fr 3fr;

  grid-column-gap: 1em;
 
}

.image-slider__image-container{
     height: 30vh;
    
    overflow: hidden;
    transition: all .2s ease-in-out; 
}

.image-slider__image{
object-fit: fill;
width: 100%;
}

.image-slider__image-container:hover { 
    transform: scale(1.1); 
     box-shadow: 0 1px 3px 0 rgba(77, 7, 7, 0.15), 0 2.5px 5px 0 rgba(0, 0, 0, 0.1),
      inset 0 -1px 2.5px 0 rgba(255, 255, 255, 0.1);
    }


@media only screen and (max-width: 600px) {

    .image-slider__container{
display: grid;
  grid-template-columns: 1fr;

  grid-column-gap: 1em;
  grid-row-gap:1em;
 
}
}
@media only screen and (min-width: 600px) and (max-width: 1200px) and (orientation: portrait) {}
@media only screen and (min-width: 600px) and (max-width: 900px) and (orientation: landscape) {}
@media only screen and (min-width: 900px) and (max-width: 1200px) and (orientation: landscape) {}
@media only screen and (min-width: 1200px)and (max-width: 1900px) {}
@media only screen and (min-width: 1900px) {}
</style>
