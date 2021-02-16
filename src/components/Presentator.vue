<template>
  <div class="presenter">
    <div v-for="(presenter, index) in Content" :key="presenter.Description_Presentation">
      <div v-if="presenter.scroll">
       <div class="center Full-Viewport">
        <div class="presenter-container">
          <div v-bind:class="{'presenter--right' : index % 2 == 1}" class="presenter-container__image-box">
            <div class="presenter-container__image-box--inside">
              <img
                class="presenter-container__image-box__image"
                :src="api_url + presenter.content_video[0].url"
                v-bind:style="{ top: scrollevelPercent }"
                alt="nothing"
              />
            </div>
          </div>

          <div class="presenter-container__Info">
            <h2 class="margin-bottom--S">{{ presenter.Description_Presentation }}</h2>

            <div class="presenter-container__Info__Button-Container ">
              <div
                v-for="(StateButton, index) in presenter.Content.states"
                :key="StateButton.name"
              >
                <button
                  class="presenter__Button "
                  @click="scrollevel(StateButton.scroll, index)"
                  v-bind:class="{ 'active-Button': index == activeButton }"
                >
                  {{ StateButton.name }}
                </button>
              </div>
            </div>

            <p class="margin-top--S presenter__description">
              {{ presenter.Content.states[activeButton].description }}
            </p>
          </div>
        </div>
        </div>
      </div>

<div v-if="!presenter.scroll">
  <div class="center Full-Viewport">
        <div class="presenter-container">
          <div v-if="presenter.Kind == 'Desktop'" v-bind:class="{'presenter--right' : index % 2 == 1}" class="presenter-container__image-box">
            <div  class="presenter-container__image-box--inside">
              <video 
              class="presenter-container__image-box__video"
         :src="api_url + presenter.content_video[selectedVideo].url"
         autoplay
        >
          {{  presenter.Description_Presentation}}
          Your browser does not support the video tag.
        </video>
            </div>
          </div>

          <div v-if="presenter.Kind == 'Phone'" v-bind:class="{'presenter--right' : index % 2 == 1}" class="presenter-container__image-box--phone">
            <div  class="presenter-container__image-box--inside--phone">
              <video 
              class="presenter-container__image-box__video"
         :src="api_url + presenter.content_video[selectedVideo].url"
         autoplay
        >
          {{  presenter.Description_Presentation}}
          Your browser does not support the video tag.
        </video>
            </div>
          </div>

          <div class="presenter-container__Info margin-bottom--M presenter-container--phone">
            <h2 class="margin-bottom--S">{{ presenter.Description_Presentation }}</h2>

            <div class="presenter-container__Info__Button-Container">
              <div
                v-for="(StateButton, index) in presenter.Content.states"
                :key="StateButton.name"
              >
                <button
                  class="presenter__Button"
                  @click="playVideo(index)"
                  v-bind:class="{ 'active-Button': index == selectedVideo }"
                >
                  {{ StateButton.name }}
                </button>
              </div>
            </div>

            <p class="margin-top--S presenter__description ">
              {{ presenter.Content.states[selectedVideo].description }}
            </p>
          </div>
        </div>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollevelPercent: "0%",
      activeButton: 0,
      activeVideoButton: 0,
      selectedVideo:0,
      api_url: process.env.VUE_APP_STRAPI_API_URL,
    };
  },
  props: {
    Content: Array,
  },
  methods: {
    scrollevel(percentage, index) {
      this.scrollevelPercent = percentage;
      this.activeButton = index;
    },
    playVideo(index) {
      this.selectedVideo = index;
    },
  },
};
</script>

<style scoped>
.presenter-container {
  display: -webkit-flex;
  display: -webkit-box;
  display: -moz-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 90%;
  --gap: 30px;
  --column-gap: var(--gap);
  --row-gap: var(--gap);
  margin: calc(var(--row-gap) / -2) calc(var(--column-gap) / -2);
}



.presenter-container   > * {
  margin: calc(var(--row-gap) / 2) calc(var(--column-gap) / 2);
}



.presenter-container__image-box {

  min-width: 60vw;
  overflow: hidden;
  border-radius: 3.5px;
  box-shadow: 0 2.5px 14px 4px rgba(0, 70, 255, 0.13),
    0 3.5px 7px 0 rgba(0, 0, 0, 0.19);
  background-color: #d8d8d8;

}

.presenter-container__image-box--phone{
  min-width: 30vw;
  display: flex;
  justify-content: center;
}

.presenter-container__image-box--inside {
  position: relative;
  width: 100%;
  padding-top: 62%;

}

.presenter-container__image-box--inside--phone{
  position: relative;
  width: 100%;
  padding-top: 180%;
  overflow: hidden;
}

.presenter-container__image-box__image {
  width: 100%;
  transition: 1s;
  position: absolute;
}

.presenter-container__image-box__video {
  max-width: 100%;
  position: absolute;
  top: 0%;
}


.presenter__Button {
  border-radius: 4px;
  border: solid 2px #0046ff;
  background-color: #ffffff;
  color: #0046ff;
  padding: 8px 24px;
  flex-grow: 3;
}

.active-Button {
  box-shadow: 0 1.5px 4px 1.5px rgba(55, 65, 255, 0.13),
    0 1px 5.5px 0 rgba(0, 0, 0, 0.27);

  background-color: #0046ff;
  color: white;
}

.presenter-container__Info {
  display: -webkit-flex;
  display: -webkit-box;
  display: -moz-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
}



.presenter-container__Info__Button-Container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  --gap: 10px;
  --column-gap: var(--gap);
  --row-gap: var(--gap);
  margin: calc(var(--row-gap) / -2) calc(var(--column-gap) / -2);
}

.presenter-container__Info__Button-Container  > * {
  margin: calc(var(--row-gap) / 2) calc(var(--column-gap) / 2);
}


@media only screen and (max-width: 600px) {
  .presenter-container {
    flex-direction: column;
  }

  .presenter-container__Info__Button-Container {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .presenter-container__image-box--phone{
  min-width: 30vw;
  display: flex;
  justify-content: center;
}
.presenter-container__image-box--inside--phone{
  position: relative;
  width: 70%;
  padding-top: 120%;
  overflow: hidden;
}
}

@media only screen and (min-width: 600px) and (max-width: 1200px) and (orientation: portrait) {
  .presenter-container {
    flex-direction: column;
  }

  .presenter-container__Info__Button-Container {
    width: 70%;
  }

  .presenter-container__Info {
    display: flex;

    flex-direction: column;
    justify-content: center;
  }
}
@media only screen and (min-width: 600px) and (max-width: 900px) and (orientation: landscape) {
  .presenter-container__Info__Button-Container {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .presenter--right{
  order: 4;
}
.presenter-container--phone{
  max-width: 30vw;
}
.presenter-container__image-box {

  min-width: 40vw;

}
.presenter__description{
  display: none;
}
}

@media only screen and (min-width: 900px) and (max-width: 1200px) and (orientation: landscape) {
  .presenter-container__Info__Button-Container {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .presenter--right{
  order: 4;
}
.presenter-container--phone{
  max-width: 30vw;
}
}

@media only screen and (min-width: 1200px)and (max-width: 1900px) {
  .presenter--right{
  order: 4;
}
.presenter-container{
margin: 50px auto 20vh auto;
}
.presenter-container--phone{
  max-width: 30vw;
}
}


@media only screen and (min-width: 1900px) {
  .presenter--right{
  order: 4;
}
.presenter-container--phone{
   max-width: 20vw;
}
.presenter-container__Info{
    max-width: 20vw;
}
.presenter-container{
margin: 50px auto 20vh auto;
}

}


.presenter {
  margin-top: 50px;
  padding-top: 150px;
  background-color: #f5f5f5;
  padding-bottom: 550px;
}



</style>


