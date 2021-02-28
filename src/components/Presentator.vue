<template>
  <div class="presenter">
    <div v-for="(presenter, index) in Content" :key="index">
      <div v-if="presenter.scroll">
       <div class="center Full-Viewport">
        <div class="presenter-container">
          <div v-scrollanimation v-bind:style="{'transition-delay': '0.1s'}" v-bind:class="{'presenter--right' : index % 2 == 1}" class="presenter-container__image-box">
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
            <h2  v-scrollanimation v-bind:style="{'transition-delay': '0s'}" class="margin-bottom--S">{{ presenter.Description_Presentation }}</h2>

            <div class="presenter-container__Info__Button-Container ">
              <div
                v-for="(StateButton, index) in presenter.Content.states"
                :key="StateButton.name"
              >
                <button
                 v-scrollanimation v-bind:style="{'transition-delay': 0.1*index+'s'}"
                  class="presenter__Button "
                  @click="scrollevel(StateButton.scroll, index)"
                  v-bind:class="{ 'active-Button': index == activeButton }"
                >
                  {{ StateButton.name }}
                </button>
              </div>
            </div>

            <p  v-scrollanimation v-bind:style="{'transition-delay': '0.3s'}" class="margin-top--S presenter__description">
              {{ presenter.Content.states[activeButton].description }}
            </p>
          </div>
        </div>
        </div>
      </div>

<div v-if="!presenter.scroll">
  <div class="center Full-Viewport">
        <div  class="presenter-container">
          <div v-scrollanimation v-bind:style="{'transition-delay': '0.1s'}" v-if="presenter.Kind == 'Desktop'|| presenter.Kind =='Other'" v-bind:class="{'presenter--right' : index % 2 == 1,'presenter-container_image-box--desktop' : presenter.Kind == 'Desktop'}"  class="presenter-container__image-box" >
            <div  class="presenter-container__image-box--inside">
              <video 
              v-if="!presenter.Content.states[selectedVideo[index]].isImage"
              class="presenter-container__image-box__video"
         :src="api_url + presenter.content_video[selectedVideo[index]].url"
         autoplay
        >
          {{  presenter.Description_Presentation}}
          Your browser does not support the video tag.
        </video>
        <img
        v-if="presenter.Content.states[selectedVideo[index]].isImage"
                class="presenter-container__image-box__video"
                 :src="api_url + presenter.content_video[selectedVideo[index]].url"
                alt="nothing"
              />

            </div>
          </div>

          <div v-scrollanimation v-bind:style="{'transition-delay': '0.1s'}" v-if="presenter.Kind == 'Phone'" v-bind:class="{'presenter--right' : index % 2 == 1}" class="presenter-container__image-box--phone">
            <div  class="presenter-container__image-box--inside--phone">
              <video 
              class="presenter-container__image-box__video"
         :src="api_url + presenter.content_video[selectedVideo[index]].url"
         autoplay
        >
          {{  presenter.Description_Presentation}}
          Your browser does not support the video tag.
        </video>
            </div>
          </div>

          <div class="presenter-container__Info margin-bottom--M presenter-container--phone">
            <h2 v-scrollanimation v-bind:style="{'transition-delay': '0s'}" class="margin-bottom--S">{{presenter.Description_Presentation}}</h2>

            <div class="presenter-container__Info__Button-Container">
              <div
                v-for="(StateButton, index2) in presenter.Content.states"
                :key="StateButton.name"
              >
                <button
                v-scrollanimation v-bind:style="{'transition-delay': 0.1*index2+'s'}"
                  class="presenter__Button"
                  @click="playVideo(index2, index)"
                  v-bind:class="{ 'active-Button': index2 == selectedVideo[index]}"
                >
                  {{ StateButton.name }}
                </button>
              </div>
            </div>

            <p class="margin-top--S presenter__description " v-scrollanimation v-bind:style="{'transition-delay': '0.3s'}">
              {{ presenter.Content.states[selectedVideo[index]].description }}
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
      selectedVideo:[0,0,0,0,0],
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
    playVideo(index2, index) {
      this.selectedVideo.splice(index, 1, index2)
      // this.selectedVideo[index] = index2;
    //console.log(this.selectedVideo[index]);
    },
  }
};
</script>

<style scoped>

.before-enter{
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease-in-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}

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
}

.presenter-container_image-box--desktop{
  border-radius: 3.5px;
  box-shadow: 8px 5px 24px 3px rgba(0,0,0,0.23);
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
    margin: 50px auto 20vh auto;
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
    margin: 50px auto 20vh auto;
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

 .presenter-container{
margin: 50px auto 20vh auto;
}
}

@media only screen and (min-width: 900px) and (max-width: 1200px) and (orientation: landscape) {
  .presenter-container__Info__Button-Container {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .presenter-container{
margin: 50px auto 20vh auto;
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
  padding-top: 50px;
  background-color: #f5f5f5;
}




</style>


